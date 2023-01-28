pub fn get_input_example(year: u16 , day: u8) -> String {
    let url = format!("https://adventofcode.com/{}/day/{}/input", year, day);
    let session_key = std::env::var("AOC_KEY").expect("AOC_KEY env not found");

    let client = reqwest::blocking::Client::new();
    let data = client
        .get(url)
        .header("cookie", format!("session={}", session_key))
        .send()
        .unwrap()
        .text()
        .unwrap();

    data
}
