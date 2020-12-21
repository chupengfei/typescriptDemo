let map = new Map<string, string>();
map.set("a", "1");
map.set("b", "1");
map.set("a", "2");
map.set("c", "1");
map.set("d", "1");



async function mapFor(map: Map<string, string>) {
  if (map) {
    // map.forEach((value, key) => {
    //   await console.log("key", key, "value", value)
    // })
    // for (let i of map.values) { 
    //     console.log()
    // }
    let iterator = map.keys();
    let r: IteratorResult<string>;
    while (r = iterator.next(), !r.done)
    { console.log(r.value); }
  }
}

mapFor(map)