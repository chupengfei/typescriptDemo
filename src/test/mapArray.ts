
interface Room {
  hid: number|string
  rid: number|string
}

async function test(rooms: Room[]) {
  let hidRidsMap: Map<number, number[]> = new Map;
  rooms.forEach(item => {
    if (hidRidsMap.has(<number>item.hid)) {
      let oldRids = <number[]>(hidRidsMap.get(<number>item.hid))
      oldRids.push(item.rid as number)
      hidRidsMap.set(<number>item.hid, oldRids)
    } else { 
      let newRids: number[] = [<number>item.rid]
      hidRidsMap.set(<number>item.hid, newRids)
    }
  })
  console.log(hidRidsMap)
}

let rooms: Room[] = []
rooms.push({
  hid: 1,
  rid: 1
})
rooms.push({
  hid: 2,
  rid: 1
})
rooms.push({
  hid: 1,
  rid: 3
})
rooms.push({
  hid: 2,
  rid: 3
})
rooms.push({
  hid: 1,
  rid: 4
})
rooms.push({
  hid: 2,
  rid: 4
})
rooms.push({
  hid: 2,
  rid: 2
})
test(rooms)
// { 1 => [ 1, 3, 4 ], 2 => [ 1, 3, 4, 2 ] }