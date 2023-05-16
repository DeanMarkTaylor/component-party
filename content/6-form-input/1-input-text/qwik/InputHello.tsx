import { component$, useSignal, $ } from "@builder.io/qwik";

const InputHello = component$(() => {
  const text = useSignal('Hello World');

  return (
    <>
      <p>{text.value}</p>
      <input bind:value={text} />
    </>
  );
});

export default InputHello;
