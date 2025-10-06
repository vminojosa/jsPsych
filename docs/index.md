#

![jsPsych](img/jspsych-logo.jpg)

<style>
    .landing {
        display: flex;
        justify-content: space-evenly;
    }
    .landing div {
        width: 25%;
    }
    .landing div button {
        width: 100%;
        position: relative;
    }
    .landing div button .preview {
        visibility: hidden;
        position: absolute;
        transition: visibility 0.2s;
    }
    .landing div button:hover .preview{
        visibility: visible;
        top: 0;
        left: 0;
    }
    .landing div button .card{
        transition: visibility 0.2s;
    }
    .landing div button:hover .card{
        visibility: hidden;
    }
</style>
<div class='landing'>
    <div>
        <button>
            <span class='card'>
                <h3>Quickstart<h3>
            </span>
            <span class='preview'>
                <p>Get jsPsych set up fast</p>
            </span>
        </button>
    </div>
    <div>
        <button>
            <span class='card'>
                <h3>Build<h3>
            </span>
            <span class='preview'>
                <p>Build experiments, plugins, and timelines</p>
            </span>
        </button>
    </div>
    <div>
        <button>
            <span class='card'>
                <h3>Community<h3>
            </span>
            <span class='preview'>
                <p>See who else uses jsPsych, and how you can give back</p>
            </span>
        </button>
    </div>
</div>
<div class='landing'>
    <div>
        <button>
            <h3>Reference<h3>
        </button>
    </div>
    <div>
        <button>
            <h3>About<h3>
        </button>
    </div>
</div>

jsPsych is a JavaScript framework for creating behavioral experiments that run in a web browser. 

Experiments in jsPsych are created using [plugins](overview/plugins.md).
Each plugin defines different kinds of events, like showing an image on the screen, and collects different kinds of data, like recording which key was pressed at which time. 
You can use the plugins that are [included with jsPsych](plugins/list-of-plugins.md), use plugins that are developed by community members in the [contrib repository](https://github.com/jspsych/jspsych-contrib), or [create your own plugins](developers/plugin-development.md).
By assembling different plugins together into [a timeline](overview/timeline.md), it is possible to create a wide range of experiments.

[The page on timelines](overview/timeline.md) is a good place to start learning about jsPsych. 
From there, you might want to complete the [hello world tutorial](tutorials/hello-world.md) to learn how to set up a jsPsych experiment and the [reaction time experiment tutorial](tutorials/rt-task.md) to learn the core features of the framework.
