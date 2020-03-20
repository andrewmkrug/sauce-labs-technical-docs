## What Is This?

Hello! If you are reading this, you are a **Solution Engineer (SE)** or Solution Engineer adjacent, and are looking for Python Code Samples. Here they are:

[https://github.com/saucelabs-training/demo-python](https://github.com/saucelabs-training/demo-python)

These code samples make use of the saucedemo.com web application and the native web demo application.


## Why Do I Need This?

During POVs, POCs or other situations, SEs may be asked to demonstrate how Sauce Labs integrates with certain test tools, languages or frameworks. One that comes up from time to time is “How do I use Sauce Labs with Python?”. The Demo-Python repository is the source for examples of using Python with



*   Sauce Virtual Device Cloud (**VDC**) for desktop browsers for web app testing,
*   Emulator/Simulator (**EMUSIM**) Environments for mobile web and app testing, and
*   Sauce Real Device Cloud (**RDC**) for mobile testing with real devices.

In this case, there are demos of using Sauce Labs with each of the above cases using Python with



*   Pytest
*   Robotframework (sometimes referred to as Robot)

as test tools.


## How Do I Use This? 

To get started, you will need to install



*   Python 3.6 or higher ([download](https://www.python.org/downloads/))
*   Pipenv ([download](https://pipenv-fork.readthedocs.io/en/latest/install.html#installing-pipenv))
*   Git (to get the above repo)

and have your Sauce Labs credentials set as environment variables SAUCE_USERNAME and SAUCE_ACCESS_KEY. For RDC at the time of this writing, you will need to have the TESTOBJECT_API_KEY set for the given project you’d like to demo.

After cloning the above repository, look at the [scripts] section of Pipfile in the project root. This will have the scripts you can execute for demo purposes. You can run each script by

```py
	pipenv run <script-name>
```

For example, running

```py
	pipenv run pytest-vdc-us
```

will execute browser-based tests using Pytest on the Sauce VDC US-West data centre. Try it out! 

The Pipfile approach was chosen because it’s a low-overhead way of quickly executing specific tasks for demo purposes. It’s possible to show how Python works with Sauce Labs without knowing too much about the specifics of each case. 

You can also look through the source code for specific code samples of each of these situations. The repo is organized in part like this:

```
Selenium/Appium Examples (top-level)
	|-- Test tool (Pytest or Robot)
		|-- Sauce Platform (VDC, EMUSIM, RDC)	
        |-- Test files
```

If you would like to see or show how to run Sauce RDC tests using Appium and Robotframework, for example, you can look under

```
Appium-examples
	|-- Robotframework
		|-- RDC
			-- Android, iOS and resources
```

Samples using VDC and EMUSIM have counterparts for both the US West Data Centre (called US in the repository) and the EU Central Data Centre (called EU in the repository). Samples using RDC have counterparts in the US1 Data Centre (US) and EU1 Data Centre (EU). (thanks Lasse!) 


## Where Can I Get Extra Help If Something is Unclear?

The author of this demo code is me, Josh Grant, your friendly Canadian Solutions Architect. Slack or email with specific questions! Also try tweaking some of the source above for changing platforms, credentials or otherwise. 


## I Have a Customer Using Some Other Python Tooling. What Do I Do? 

Both Pytest and Robotframework are mainstream tools used widely in the Python world. Other tools exist and may be in use. Here are some talking points for this situation:

*   “Pytest can be used as a test runner only”: Pytest integrates with many Python test frameworks by design. It is possible to use Pytest with other test tools or as a replacement for other test executors. This might work for the customer’s case. \

*   “Consider moving to Pytest”: In light of the previous point, Pytest is an active tool with a good community around it. Suggest the customer look at Pytest either as a test runner only or as a total replacement.  \

*   “Nose is dead”: A once popular test framework for python was Nose, which has been inactive as a project since 2015. If a customer is using Nose, recommend Pytest.

If a special case arises where the demo-python examples are not sufficient, please reach out to me or consider opening an Issue/Pull Request on this GitHub project.


## I Have a Customer Using Python 2. What Should I Do? 

As of January 1, 2020, the Python Software Foundation is no [longer supporting Python 2](https://www.python.org/doc/sunset-python-2/). This includes security updates and patches. There has been an unusually long transition period from Python 2 to Python 3 and there are some teams who still have not transitioned. At this point, we fully recommend teams move to Python 3 as soon as possible. The Solution Architect team can assist with this process.

The code samples above will assume using Python 3.5+ going forward with no plans to support Python 2.7. If there is a Very Special Case of a (large) opportunity with a customer who is (pretty extensively) using Python but not planning to move to Python 3 (for some reason), please reach out to Josh Grant or Marcus Merrill for assistance. 
