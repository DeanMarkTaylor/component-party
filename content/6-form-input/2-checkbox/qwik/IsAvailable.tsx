import { component$, useSignal, $ } from "@builder.io/qwik";

export default component$(() => {
  const isAvailable = useSignal(false);

  return (
    <>
      <input id="is-available" type="checkbox" bind:checked={isAvailable} />
      <label for="is-available">Is available</label>
    </>
  );
});

