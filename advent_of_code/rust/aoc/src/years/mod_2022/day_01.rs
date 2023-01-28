use aoc::get_input_example;

pub fn run() {
  let data = get_input_example(2022, 1);
  let data = data.split("\n");
  let mut sums : Vec<i32> = Vec::new();
  let mut sum  = 0;
  for line in data.clone() {
    if line.is_empty() {
      sums.push(sum);
      sum = 0;
      continue
    }
    sum += line.parse::<i32>().unwrap();
  }
  sums.sort();
  sums.reverse();
  println!("2022, day 01, first {:?}, total {:?}", sums[0], sums[0] + sums[1] + sums[2])
}