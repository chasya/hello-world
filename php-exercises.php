
function is_power_of_two($n) {
	if(($n & ($n - 1)) == 0) 	{
		return "$n is power of 2";
	} else {
		return "$n is not power of 2";
	}
}

print_r(is_power_of_two(4));
print_r(is_power_of_two(5));
