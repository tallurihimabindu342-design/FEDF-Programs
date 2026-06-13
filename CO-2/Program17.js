export {};

let name = "Charan";

function wish(
  callback: () => void
) {

  console.log("Hello " + name);

  callback();
}

function typescript() {

  console.log(
    "We were in the callbacks of the typescript"
  );
}

wish(typescript);