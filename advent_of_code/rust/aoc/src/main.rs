mod years;
use dotenv::dotenv;

fn main() {
    dotenv().ok();
    years::mod_2015::day_01::run();
    years::mod_2022::day_01::run();
    years::mod_2022::day_02::run();
    years::mod_2022::day_03::run();
    years::mod_2022::day_04::run();
    years::mod_2022::day_08::run();
}
