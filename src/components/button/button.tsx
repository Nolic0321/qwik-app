import {component$, PropFunction} from "@builder.io/qwik";

interface ButtonProps {
	label: string;
	action: PropFunction;
}
export default component$((props:ButtonProps) => {
	return(<div>
		<button class={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
		onClick$={props.action}>
			{props.label}
		</button>
	</div>)
});
