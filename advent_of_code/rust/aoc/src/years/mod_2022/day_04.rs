use aoc::get_input_example;

pub fn run() {
    let data: String = get_input_example(2022, 4);
    let lines = data.lines();

    for line in lines {
        let assigments = line.split_once(",").unwrap();
        let first = assigments.0.split_once("-").unwrap();
        let second = assigments.0.split_once("-").unwrap();
        let first: (u32, u32) = (first.0.parse().unwrap(), first.1.parse().unwrap());
        let second: (u32, u32) = (second.0.parse().unwrap(), second.1.parse().unwrap());
        
        println!("{:?}, {:?}", first, second)
    }
}
