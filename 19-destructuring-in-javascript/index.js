const Laptop = {
    make: "microsoft",
    name: "surface book 2",
    configurations: [
        { memory: 16, storage: 2 },
        { memory: 16, storage: 1 },
        { memory: 32, storage: 2 },
    ],
    availability: {
        usa: { available: true },
        uk: { available: false },
        india: { available: true }
    }
}

const {
    make,
    configurations: [
        conf1,
        ,
        conf3
    ],
    availability: {
        india: {
            available: india_avail
        }
    }
} = Laptop;

console.log(make, conf3, india_avail)
