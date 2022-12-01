export let a = 101111;
import.meta.hot.accept(["/yuheng/context.js"], (newModule) => {
  console.log(newModule[0], "out");

  for (let i in newModule[0]) {
    addContext(i, newModule[0][i]);
  }
});
