let timerId;

function fnToBeCalled() {
  console.log("fnToBeCalled called");
}

function debouncedFn() {
  clearTimeout(timerId);
  timerId = setTimeout(fnToBeCalled, 1000);
}

debouncedFn();
debouncedFn();
debouncedFn();
debouncedFn();
debouncedFn();
debouncedFn();
