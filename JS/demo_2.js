async function func() {
  console.log(1);
  await Promise.resolve(console.log(2))
  console.log(3);
}

func();

console.log(4);
