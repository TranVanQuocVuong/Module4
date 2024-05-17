"use strict";
function getShippingCost(national) {
    switch (national) {
        case "VN":
            return 10000;
        case "US":
            return 20000;
        case "UK":
            return 30000;
    }
}
