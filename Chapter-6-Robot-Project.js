const roads = [
    "Alice's House-Bob's House",
    "Alice's House-Cabin",
    "Alice's House-Post Office",
    "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",
    "Marketplace-Farm",
    "Marketplace-Post Office",
    "Marketplace-Shop",
    "Marketplace-Town Hall",
    "Shop-Town Hall"
];

exports.buildGraph = function (edges) {
    let graph = Object.create(null);
    function addEdge(from,to){
        if (graph[from] == null){
            graph[from] = [to];
        }
        else
        {
            graph[from].push(to);
        }
    }
    for (let [from,to] of edges){
        addEdge(from,to);
        addEdge(to,from);
    }
    return graph;
}

// let roadGraph = buildGraph(roads);
//
//
// class VillageState {
//     constructor(place,parcels)
//     {
//         this.place = place;
//         this.parcels = parcels;
//     }
//
//     move(destination) {
//         if (!roadGraph[this.place].includes(destination)) {
//             return this;
//         } else {
//             let parcels = this.parcels.map(p => {
//                 if (p.place !== this.place) return p;
//                 return {place: destination, address: p.address};
//             }).filter(p => p.place !== p.address);
//
//             return new VillageState(destination, parcels);
//         }
//     }
// }
//
// function runRobot(state, robot, memory) {
//     for (let turn = 0;; turn++) {
//         if (state.parcels.length === 0) {
//             console.log(`Done in ${turn} turns`);
//             break;
//         }
//         let action = robot(state, memory);
//         state = state.move(action.direction);
//         memory = action.memory;
//         console.log(`Moved to ${action.direction}`);
//     }
// }
//
// function randomPick(arr) {
//     let choice = Math.floor(Math.random() * arr.length);
//     return arr[choice];
// }
//
// function randomRobot(state){
//     return {direction:randomPick(roadGraph[state.place])};
// }
//
// VillageState.random = function (parcelCount = 5){
//     let parcels = [];
//     for (let i = 0; i < parcelCount; i++)
//     {
//         let place = randomPick(Object.keys(roadGraph));
//         let address;
//         do {
//             address = randomPick(Object.keys(roadGraph));
//         }
//         while (place === address);
//         parcels.push({place,address});
//     }
//     return new VillageState("Post Office", parcels);
// }
//
// //runRobot(VillageState.random(), randomRobot);
//
// const mailRoute = [
//     "Alice's House", "Cabin", "Alice's House", "Bob's House",
//     "Town Hall", "Daria's House", "Ernie's House",
//     "Grete's House", "Shop", "Grete's House", "Farm",
//     "Marketplace", "Post Office"
// ];
//
// function routeRobot(state,memory){
//     if (memory.length === 0)
//     {
//         memory = mailRoute;
//     }
//     return {direction:memory[0], memory: memory.slice(1)};
// }
//
// //runRobot(VillageState.random(),routeRobot,[]);
//
// function findRoute(graph, from, to) {
//     let work = [{at: from, route: []}];
//     for (let i = 0; i < work.length; i++) {
//         let {at, route} = work[i];
//         for (let place of graph[at]) {
//             if (place === to) {
//                 return route.concat(place);
//             }
//             if (!work.some(w => w.at === place)) {
//                 work.push({at: place, route: route.concat(place)});
//             }
//         }
//     }
// }
// function goalOrientedRobot({place, parcels}, route) {
//     if (route.length === 0) {
//         let parcel = parcels[0];
//         if (parcel.place !== place) {
//             route = findRoute(roadGraph, place, parcel.place);
//         } else {
//             route = findRoute(roadGraph, place, parcel.address);
//         }
//     }
//     return {direction: route[0], memory: route.slice(1)};
// }
//
// let test = new VillageState("Post Office",
//     [{place: "Alice's House", address: "Shop"}]);
//
// //runRobot(test,goalOrientedRobot,[]);
//
// function compareRobots(robot1,memory1,robot2,memory2){
//     function newRunRobot(state,robot,memory)
//     {
//         for (let turn = 0;;turn++)
//         {
//             if (state.parcels.length === 0)
//             {
//                 return turn;
//             }
//             let action = robot(state,memory);
//             state = state.move(action.direction);
//             memory = action.memory;
//         }
//     }
//     let total1 = 0,total2 = 0;
//     for (let i = 0; i < 100; i++){
//         let task = VillageState.random();
//         total1 += newRunRobot(task,robot1,memory1);
//         total2 += newRunRobot(task,robot2,memory2);
//     }
//     return `First robot took on average ${total1/100} steps, and the second ${total2/100}`;
// }
//
// function quickerRobot({place,parcels}, route){
//     if (route.length === 0) {
//         let routes = parcels.map(p => {
//             if (p.place !== place) {
//                 return {route: findRoute(roadGraph, place, p.place)};
//             } else {
//                 return {route: findRoute(roadGraph, place, p.address)};
//             }
//         });
//         route = routes.reduce((r1, r2) => r1.route.length >= r2.route.length ? r2 : r1).route;
//     }
//     return {direction: route[0], memory:route.slice(1)};
// }
//
// runRobot(VillageState.random(5),quickerRobot,[]);
//
// console.log(compareRobots(quickerRobot,[],goalOrientedRobot,[]));
//
// class PGroup {
//     constructor(group){
//         this.group = group;
//     }
//     add (val) {
//         if (this.has(val)) {
//             return this;
//         }
//         return new PGroup(this.group.concat([val]));
//     }
//     has (val) {
//         return this.group.includes(val);
//     }
//     delete (val) {
//         return new PGroup(PGroup.empty.group.concat(this.group.filter(el => el !== val)));
//     }
// }
//
// PGroup.empty = new PGroup([]);
//
// let a = PGroup.empty.add("a");
// let ab = a.add("b");
// let b = ab.delete("a");
//
// console.log(a);
// console.log(b.has("b"));
// // → true
// console.log(a.has("b"));
// // → false
// console.log(b.has("a"));
// // → false
