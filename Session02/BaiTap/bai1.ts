type NationalType = "VN" | "US" | "UK";

function getShippingCost(national: NationalType): number {
    switch (national) {
        case "VN":
            return 10000;
        case "US":
            return 20000;
        case "UK":
            return 30000;
    }
}