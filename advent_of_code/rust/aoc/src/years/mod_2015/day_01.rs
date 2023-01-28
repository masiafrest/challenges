use aoc::get_input_example;

pub fn run() {
    let data = get_input_example(2015, 1);
    println!(
        "2015, day_01, part_one:{}, part_two:{}",
        part_one(&data),
        part_two(&data)
    )
}
fn part_one(data: &str) -> i32 {
    let mut sum = 0;

    for c in data.chars() {
        match c {
            '(' => sum += 1,
            ')' => sum -= 1,
            _ => sum += 0,
        }
    }

    sum
}

fn part_two(data: &str) -> usize{
    let mut sum = 0;
    let mut pos = 0;
    for (i, c) in data.chars().enumerate() {
        match c {
            '(' => sum += 1,
            ')' => sum -= 1,
            _ => sum += 0,
        }
        if sum == -1 {
            pos = i + 1;
            break;
        }
    }
    pos
}
