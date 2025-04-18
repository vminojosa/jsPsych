import cloze from "@jspsych/plugin-cloze";
import htmlKeyboardResponse from "@jspsych/plugin-html-keyboard-response";
import surveyMultiChoice from "@jspsych/plugin-survey-multi-choice";
import surveyText from "@jspsych/plugin-survey-text";
import { clickTarget, pressKey, startTimeline } from "@jspsych/test-utils";

import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "../../src";

describe("standard use of function as parameter", () => {
  test("function value is used as parameter", async () => {
    const { getHTML } = await startTimeline([
      {
        type: htmlKeyboardResponse,
        stimulus: () => "foo",
      },
    ]);

    expect(getHTML()).toMatch("foo");
  });

  test("parameters can be protected from early evaluation using ParameterType.FUNCTION", async () => {
    const mock = jest.fn();

    const { displayElement } = await startTimeline([
      {
        type: cloze,
        text: "%foo%",
        check_answers: true,
        mistake_fn: mock,
      },
    ]);

    expect(mock).not.toHaveBeenCalled();
    await clickTarget(displayElement.querySelector("#finish_cloze_button"));
    expect(mock).toHaveBeenCalledTimes(1);
  });
});

describe("data as function", () => {
  test("entire data object can be function", async () => {
    const { getData } = await startTimeline([
      {
        type: htmlKeyboardResponse,
        stimulus: "foo",
        data: () => ({ x: 1 }),
      },
    ]);

    await pressKey("a");
    expect(getData().values()[0].x).toBe(1);
  });

  test("single parameter of data object can be function", async () => {
    const { getData } = await startTimeline([
      {
        type: htmlKeyboardResponse,
        stimulus: "foo",
        data: {
          x: () => 1,
        },
      },
    ]);

    await pressKey("a");
    expect(getData().values()[0].x).toBe(1);
  });
});

describe("nested parameters as functions", () => {
  test("entire parameter can be a function", async () => {
    const { displayElement, expectFinished } = await startTimeline([
      {
        type: surveyText,
        questions: () => [{ prompt: "How old are you?" }, { prompt: "Where were you born?" }],
      },
    ]);

    expect(displayElement.querySelectorAll("p.jspsych-survey-text").length).toBe(2);
    await clickTarget(displayElement.querySelector("#jspsych-survey-text-next"));
    await expectFinished();
  });

  test("nested parameter can be a function", async () => {
    const { expectFinished, displayElement } = await startTimeline([
      {
        type: surveyText,
        questions: [
          {
            prompt: () => {
              return "foo";
            },
          },
          { prompt: "bar" },
        ],
      },
    ]);

    expect(displayElement.querySelector("#jspsych-survey-text-0 p.jspsych-survey-text").innerHTML).toBe(
      "foo"
    );
    expect(displayElement.querySelector("#jspsych-survey-text-1 p.jspsych-survey-text").innerHTML).toBe(
      "bar"
    );
    await clickTarget(displayElement.querySelector("#jspsych-survey-text-next"));
    await expectFinished();
  });

  test("multiple nested parameters can be functions", async () => {
    const { expectFinished, displayElement } = await startTimeline([
      {
        type: surveyMultiChoice,
        questions: [
          {
            prompt: () => {
              return "foo";
            },
            options: () => {
              return ["buzz", "fizz"];
            },
          },
          {
            prompt: "bar",
            options: () => {
              return ["one", "two"];
            },
          },
        ],
      },
    ]);

    expect(displayElement.querySelector("#jspsych-survey-multi-choice-0").innerHTML).toMatch("foo");
    expect(displayElement.querySelector("#jspsych-survey-multi-choice-0").innerHTML).toMatch("buzz");
    expect(displayElement.querySelector("#jspsych-survey-multi-choice-1").innerHTML).toMatch("bar");
    expect(displayElement.querySelector("#jspsych-survey-multi-choice-1").innerHTML).toMatch("one");
    await clickTarget(displayElement.querySelector("#jspsych-survey-multi-choice-next"));
    await expectFinished();
  });

  test("nested parameters can be protected from early evaluation using ParameterType.FUNCTION", async () => {
    // currently no plugins that use this feature (Jan. 2021), so here's a simple placeholder plugin.

    const info = <const>{
      name: "function-test-plugin",
      version: "0.0.1",
      parameters: {
        foo: {
          type: ParameterType.COMPLEX,
          default: null,
          nested: {
            not_protected: {
              type: ParameterType.STRING,
              default: null,
            },
            protected: {
              type: ParameterType.FUNCTION,
              default: null,
            },
          },
        },
      },
      data: {},
    };

    class FunctionTestPlugin implements JsPsychPlugin<typeof info> {
      static info = info;

      constructor(private jsPsych: JsPsych) {}

      trial(display_element: HTMLElement, trial: TrialType<typeof info>) {
        this.jsPsych.finishTrial(trial.foo);
      }
    }

    const { getData } = await startTimeline([
      {
        type: FunctionTestPlugin,
        foo: {
          not_protected: () => "x",
          protected: () => "y",
        },
      },
    ]);

    const data = getData().values()[0];
    expect(data.not_protected).toBe("x");
    expect(data.protected).not.toBe("y");
    expect(data.protected()).toBe("y");
  });
});
