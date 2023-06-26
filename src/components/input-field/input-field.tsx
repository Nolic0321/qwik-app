import {component$} from "@builder.io/qwik";

export default component$(() => {
	return (
		<div class={'h-auto'}>
			<input class={'h-auto'} type={"text"} name={"newToDo"}/>
		</div>);
});
