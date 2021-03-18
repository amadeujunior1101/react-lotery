(function (doc) {
    const ajax = new XMLHttpRequest();

    let $containerBalls = doc.querySelector(".container-balls");
    let $buttonCompleteGame = doc.querySelector(".button-complete-game");
    let $buttonClearGame = doc.querySelector(".button-clear-game");
    let $buttonAddToCart = doc.querySelector(".button-add-cart");
    let $textValueTotal = doc.querySelector(".span-value-total");

    function init() {
        createButtonsChoose();
        console.log("função init");
    }

    let types = [];
    let $paragraph = doc.querySelector(".text-information");
    let $textDescription = doc.createElement("p");

    function createButtonsChoose() {
        ajax.open("GET", "/games.json", true);
        ajax.send();
        ajax.addEventListener("readystatechange", function load() {
            if (!isReady.call()) return;
            const data = ajax.response;
            types = JSON.parse(data);

            let $buttonsChoose = doc.querySelector(".buttons-choose");

            $textDescription.className = "description";
            $textDescription.textContent = types.types[0]["description"];
            $paragraph.appendChild($textDescription);

            let ids = 1;
            types.types.map((item) => {
                let $chooseButton = doc.createElement("button");
                $chooseButton.setAttribute("style", `background: ${item.color}; color: #fff`);
                $chooseButton.setAttribute("active", ids == 1 && true);

                $chooseButton.textContent = item.type;

                $chooseButton.id = ids++;

                $chooseButton.id != 1 &&
                    $chooseButton.setAttribute(
                        "style",
                        `border: 2px solid ${item.color}; background: #fff; color: ${item.color}`
                    );
                $buttonsChoose.appendChild($chooseButton);

                loadNumbersGames(types.types[0].type);

                $chooseButton.addEventListener(
                    "click",
                    function () {
                        modifyActiveButtonChoose($buttonsChoose, $chooseButton);
                    },
                    false
                );
            });
        });
    }

    function modifyActiveButtonChoose($buttonsChoose, $chooseButton) {
        Array.prototype.forEach.call($buttonsChoose.children, function (item, index) {
            return $buttonsChoose.children[index].attributes.id.value == $chooseButton.id
                ? $buttonsChoose.children[index].setAttribute("active", true)
                : $buttonsChoose.children[index].setAttribute("active", false);
        });

        paintSelectedButton();
    }

    function paintSelectedButton() {
        let $buttonsChoose = doc.querySelector(".buttons-choose");

        Array.prototype.forEach.call($buttonsChoose.children, function select(item, index) {
            if ($buttonsChoose.children[index].attributes.active.value === "true") {
                $textDescription.textContent = types.types[index]["description"];
                loadNumbersGames($buttonsChoose.children[index].innerHTML);
                item.setAttribute("style", `background: ${types.types[index].color}; color: #fff`);
            } else {
                item.active !== true &&
                    item.setAttribute(
                        "style",
                        `border: 2px solid ${types.types[index].color}; background: #fff; color: ${types.types[index].color}`
                    );
            }
        });
    }

    let arrayTemp = [];
    let arrayTransp = [];
    let retorno;

    function loadNumbersGames(chooseGame) {
        arrayTemp = [];
        retorno = types.types.filter((item, index) => {
            return item.type == chooseGame;
        });

        while ($containerBalls.firstChild) {
            $containerBalls.removeChild($containerBalls.firstChild);
        }

        arrayTransp = arrayTemp;

        for (let index = 0; index < retorno[0].range; index++) {
            let $div = doc.createElement("div");
            $div.setAttribute("style", "border: 2px solid #adc0c4");
            let $span = doc.createElement("span");
            $div.id = index + 1;

            index + 1 < 10
                ? ($span.textContent = `${"0" + String(index + 1)}`)
                : ($span.textContent = String(index + 1));

            $div.setAttribute("active", false);

            $div.className = "ball";
            $div.appendChild($span);
            $containerBalls.appendChild($div);

            $div.addEventListener("click", function name() {
                $div.getAttribute("active") === "false"
                    ? arrayTemp.length < retorno[0]["max-number"] &&
                    $div.setAttribute("active", true)
                    : $div.setAttribute("active", false);

                if ($div.getAttribute("active") === "true") {
                    $div.setAttribute("style", `background: ${retorno[0].color}`);

                    arrayTemp.push($div.firstElementChild.innerText);
                } else {
                    $div.setAttribute("style", "background: #adc0c4");

                    arrayTemp.forEach(function (item, index, object) {
                        if (item === $div.firstElementChild.innerText) {
                            object.splice(index, 1);
                        }
                    });
                }
            });
        }

        false;
    }

    function isReady() {
        return ajax.readyState === 4 && ajax.status === 200;
    }

    $buttonCompleteGame.addEventListener("click", function completeGame() {
        while (arrayTemp.length < retorno[0]["max-number"]) {
            let number = Math.floor(Math.random() * retorno[0].range + 1);
            const found = arrayTemp.some((element) => element == Number(number));
            if (!found) {
                let newNumber = "";

                number < 10
                    ? (newNumber = `${"0" + String(number)}`)
                    : (newNumber = String(number));

                $containerBalls.children[Number(number - 1)].setAttribute("active", true);
                $containerBalls.children[Number(number - 1)].setAttribute(
                    "style",
                    `background: ${retorno[0].color}`
                );

                arrayTemp.push(newNumber);
            }
        }
    });

    $buttonClearGame.addEventListener("click", function completeGame() {
        let index = 0;
        while (index + 1 <= retorno[0]["range"]) {
            $containerBalls.children[index].setAttribute("active", false);
            $containerBalls.children[index].setAttribute("style", "background: #adc0c4");

            index++;
        }
        arrayTemp = [];
    });

    let arrayCart = [];
    let $containerCardBase = doc.querySelector(".card-base");

    let indexRemoveArray = 0;
    let $elementScroll = doc.createElement("div");
    
    $buttonAddToCart.addEventListener("click", function clearGame() {
        if (arrayTemp.length < retorno[0]["max-number"]) return;

        arrayCart.push({
            type: retorno[0]["type"],
            price: retorno[0]["price"],
            bets: arrayTemp,
        });

        console.log("Itens no carinho:", arrayCart);

        let $divListGames = doc.createElement("div");
        $divListGames.className = "list-games";
        $divListGames.setAttribute("index", indexRemoveArray);

        let $divGameIcon = doc.createElement("div");
        $divGameIcon.className = "game-icon";

        let $iconRemove = doc.createElement("i");

        indexRemoveArray++;

        $iconRemove.className = "fas fa-trash-alt";
        $iconRemove.setAttribute("style", "cursor: pointer;");

        let $divisorElement = doc.createElement("div");
        $divisorElement.className = "divisor-element";
        $divisorElement.setAttribute("style", `background: ${retorno[0]["color"]};`);
        let $gameDescription = doc.createElement("div");
        $gameDescription.className = "game-description";

        let $spanNumberList = doc.createElement("span");
        $spanNumberList.className = "span-number-list";
        $spanNumberList.textContent = arrayTemp;
        let $spanType = doc.createElement("span");
        $spanType.className = "span-type";
        $spanType.textContent = retorno[0]["type"];
        $spanType.setAttribute("style", `color: ${retorno[0]["color"]};`);

        $containerCardBase.appendChild($divListGames);

        $divListGames.appendChild($divGameIcon);
        $divGameIcon.appendChild($iconRemove);
        $divListGames.appendChild($divisorElement);
        $divListGames.appendChild($gameDescription);
        $gameDescription.appendChild($spanNumberList);
        $gameDescription.appendChild($spanType);

        let index = 0;
        while (index + 1 <= retorno[0]["range"]) {
            $containerBalls.children[index].setAttribute("active", false);
            $containerBalls.children[index].setAttribute("style", "background: #adc0c4");
            index++;
        }
        arrayTemp = [];

        let $divInformationCartEmpty = doc.querySelector(".div-information-cart-empty");

        $divInformationCartEmpty.setAttribute("style", "display: none");

        let indexForGroupOfButtonsWhenAdding = 0;

        Array.prototype.filter.call($containerCardBase.children, function (item, index) {
            return item.className == "list-games" && $elementScroll.appendChild(item);
        });

        $elementScroll.className = "scroll-list";
        $elementScroll.setAttribute("style", "overflow-y: scroll; max-height: 300px;");
        $containerCardBase.appendChild($elementScroll);

        Array.prototype.filter.call($elementScroll.children, function (item, index) {
            return item.className == "list-games" && item.setAttribute("index", indexForGroupOfButtonsWhenAdding++);
        });

        $iconRemove.addEventListener("click", function name() {
            arrayCart.forEach(function (item, index, object) {
                if (index === Number($divListGames.getAttribute("index"))) {
                    object.splice(index, 1);
                }
            });

            $iconRemove.parentNode.parentElement.remove();

            let indexForGroupOfButtonsAfterDeleting = 0;
            Array.prototype.filter.call($elementScroll.children, function (item, index) {
                return (
                    item.className == "list-games" && item.setAttribute("index", indexForGroupOfButtonsAfterDeleting++)
                );
            });

            if (arrayCart.length === 0) {
                $divInformationCartEmpty.setAttribute("style", "display: grid");
                indexRemoveArray = 0;
            }
            sumCart();
            console.log("Itens no carinho:", arrayCart);
        });
        sumCart();
    });

    function sumCart() {
        var total = arrayCart.reduce(function (total, item) {
            return total + item.price;
        }, 0);

        $textValueTotal.innerHTML = total
            .toFixed(2)
            .replace(".", ",")
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }

    init();
})(document);