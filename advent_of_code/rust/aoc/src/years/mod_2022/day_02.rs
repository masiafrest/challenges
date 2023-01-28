use std::{cmp::Ordering, str::FromStr};

use aoc::get_input_example;

#[derive(PartialEq, Clone, Copy)]
enum Move {
    Rock = 1,
    Paper,
    Scissor,
}

impl PartialOrd for Move {
    fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
        if self == &Move::Scissor && other == &Move::Rock {
            Some(Ordering::Greater)
        } else if self == &Move::Rock && other == &Move::Scissor {
            Some(Ordering::Less)
        } else {
            Some((*self as u8).cmp(&(*other as u8)))
        }
    }
}

impl FromStr for Move {
    type Err = String;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        match s {
            "A" | "Y" => Ok(Move::Rock),
            "B" | "X" => Ok(Move::Paper),
            "C" | "Z" => Ok(Move::Scissor),
            _ => Err("Not a know move".to_string()),
        }
    }
}

pub fn run() {
    let data = get_input_example(2022, 2);
    let part_one: u32 = data
        .lines()
        .map(|line| {
            let moves: Vec<Move> = line
                .split(" ")
                .map(|s| s.parse::<Move>().unwrap())
                .collect();
            match moves[0].partial_cmp(&moves[1]) {
                Some(Ordering::Equal) => 3 + moves[1] as u32,
                Some(Ordering::Less) => 6 + moves[1] as u32,
                Some(Ordering::Greater) => 0 + moves[1] as u32,
                None => panic!("moves should be comparable"),
            }
        })
        .sum();
    let part_two: u32 = data
        .lines()
        .map(|line| {
            let moves: Vec<&str> = line.split(" ").collect();
            let opponent_move = moves[0].parse::<Move>().unwrap();
            match moves[1] {
              "X" => {
                let our_move = match opponent_move  {
                  Move::Paper => Move::Rock,
                  Move::Rock => Move::Scissor,
                  Move::Scissor => Move::Paper 
                };
                0 + our_move as u32
              },
              "Y" => 3 + opponent_move as u32,
              "Z" => {
                let our_move = match opponent_move  {
                  Move::Paper => Move::Scissor,
                  Move::Rock => Move::Paper,
                  Move::Scissor => Move::Rock 
                };
                6 + our_move as u32
              },
                _ => panic!("moves should be comparable"),
            }
        })
        .sum();
    println!("2022, day 02, part one: {}, part two: {}", part_one.to_string(), part_two.to_string())
}
