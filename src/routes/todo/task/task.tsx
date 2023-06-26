import {component$, useStylesScoped$} from "@builder.io/qwik";

interface TaskProps {
	label: string;
	checked: boolean;
}
export default component$((props: TaskProps) => {
	return (
		<div class={"inline-flex"}>
			<input type="checkbox" id="myCheckbox" name="myCheckbox" checked={props.checked}/>
			<label class={"pl-3"} for="myCheckbox">{props.label}</label>
		</div>
	);
});
