use std::collections::HashSet;

use aoc::get_input_example;

pub fn run() {
    let binding = get_input_example(2022, 3);
    let lines: Vec<&str> = binding.lines().collect();
    let mut sum = 0;

    // Loop through each rucksack
    for line in lines {
        let mid = line.len() / 2;

        // Split the rucksack into two compartments
        let comp1 = &line[..mid];
        let comp2 = &line[mid..];

        // Create two HashSets to keep track of the items in each compartment
        let mut set1 = HashSet::new();
        let mut set2 = HashSet::new();

        // Add the items in the first compartment to the first HashSet
        for c in comp1.chars() {
            set1.insert(c);
        }

        // Add the items in the second compartment to the second HashSet
        for c in comp2.chars() {
            set2.insert(c);
        }

        // Use the intersection method to find the items that appear in both compartments
        let common_char: HashSet<char> = set1.intersection(&set2).cloned().collect();

        // Loop through the common item types
        for c in common_char {
            // Compute the priority of the item type
            let priority = if c.is_lowercase() {
                c as u32 - 'a' as u32 + 1
            } else {
                c as u32 - 'A' as u32 + 27
            };
            // Add the priority to the sum
            sum += priority;
        }
    }

    println!("2022, day 3, part1:{}, part2:", sum)
}
