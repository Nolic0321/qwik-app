import {component$, useStylesScoped$, $, useSignal} from "@builder.io/qwik";
import InputField from "../../components/input-field/input-field";
import Button from "../../components/button/button";
import Task from "./task/task";
import STYLES from "./index.css?inline";

const addTask = $(()=>{
	//Create new task object
	//Set it's label to the InputField value
	//Add it to the list
});

const newTaskValue = useSignal("");
export default component$(() => {
	useStylesScoped$(STYLES);
	return (<div class={"flex flex-col items-center"}>
			<h1 class={"m-4 text-2xl"}>TODO</h1>
			<hr/>
			<div id={"todo-list"} class={"mt-4"}>
				<div class={"mb-4 inline-flex items-center justify-between content-between"}>
					<input type={"text"} value={newTaskValue} class={"w-1/2"} placeholder={"New Task"}/>
					<div>
					</div>
					<div class={"ml-4"}>
						<Button label={"Add"} action={addTask}/>
					</div>
				</div>
				<ul>
					<li>
						<Task label={"Task 1"} checked={false}/>
					</li>
					<li>

						<Task label={"Task 2"} checked={true}/>
					</li>
				</ul>
			</div>
		</div>
	);
});

