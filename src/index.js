import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



var five_cost_dict = {
    "anivia": [4, 4],
    "kaisa": [8, 12],
    "karthus": [10, 10],
    "kayle": [7, 7],
    "missFortune": [6, 9],
    "pantheon": [5, 2],
    "swain": [9, 1],
    "yasuo": [2, 3]
}


var four_cost_dict = {
    "akali": [1, 8],
    "aurelionSol": [10, 2],
    "brand": [4, 1],
    "chogath": [3, 12],
    "draven": [2, 6],
    "gnar": [9, 14],
    "jinx": [6, 5],
    "kindred": [8, 10],
    "leona": [5, 7],
    "sejuani": [7, 4]
}

var three_cost_dict = {
    "kennen": [4, 8],
    "shyvana": [9, 2],
    "katarina": [1, 6],
    "poppy": [7, 14],
    "rengar": [1, 13],
    "aatrox": [2, 1],
    "ashe": [8, 4],
    "evelynn": [1, 1],
    "morgana": [10, 1],
    "vi": [3, 5],
    "gangplank": [6, 9],
    "veigar": [10, 14],
    "volibear": [3, 4]
}

var two_cost_dict = {
    "lucian": [6, 7],
    "zed": [1, 8],
    "ahri": [10, 13],
    "blitzcrank": [3, 11],
    "lissandra": [4, 4],
    "lulu": [10, 14],
    "pyke": [1, 9],
    "varus": [8, 1],
    "jayce": [9, 5],
    "braum": [5, 4],
    "reksai": [3, 12],
    "shen": [2, 8],
    "twistedFate": [10, 9]
}

var one_cost_dict = {
    "Darius": [7, 6],
    "Kassadin": [10, 12],
    "Khazix": [1, 12],
    "Mordekaiser": [7, 10],
    "Vayne": [8, 7],
    "Fiora": [2, 7],
    "Garen": [7, 7],
    "Graves": [6, 9],
    "Nidalee": [9, 13],
    "Tristana": [6, 14],
    "Warwick": [3, 13],
    "Elise": [9, 1],
    "Camille": [2, 5]
}


class Tile extends React.Component {

    constructor(props) {
        super(props);
        //console.log(this.props)
    }


    render() {

        var sectionStyle = null

        if(this.props.championInfo[4]){
            sectionStyle = {
                backgroundImage: "url(icons/" + this.props.championInfo[0] + ".png)",
                border: "blue calc(1vw) solid",
                opacity: ".4"
            }
        }else if(this.props.championInfo[3] == 1){
            sectionStyle = {
                backgroundImage: "url(icons/" + this.props.championInfo[0] + ".png)",
                border: "yellow calc(1vw) solid"
            }
        } else if(this.props.championInfo[3] == 2){
            sectionStyle = {
                backgroundImage: "url(icons/" + this.props.championInfo[0] + ".png)",
                border: "orange calc(1vw) solid"
            }
        }else if(this.props.championInfo[3] >= 3){
            sectionStyle = {
                backgroundImage: "url(icons/" + this.props.championInfo[0] + ".png)",
                border: "red calc(1vw) solid"
            }
        }else{
            this.props.championInfo[3] = 0
            sectionStyle = {
                backgroundImage: "url(icons/" + this.props.championInfo[0] + ".png)",
                border: "black calc(1vw) solid"
            }
        }

        return (
            <button onClick={() => this.props.onClick(this.props.championInfo)} className="Tile" style={sectionStyle}>
            </button>
        );

    }

}


class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            championsArrayGlobal: this.initializeChampionArray()
        };
    }

    initializeChampionArray() {

        var championArray = []
        for (var champion in one_cost_dict) {
            if (one_cost_dict.hasOwnProperty(champion)) {
                championArray = championArray.concat([[champion, 1, one_cost_dict[champion], 0, false]])
            }
        }

        for (var champion in two_cost_dict) {
            if (two_cost_dict.hasOwnProperty(champion)) {
                championArray = championArray.concat([[champion, 2, two_cost_dict[champion], 0, false]])
            }
        }

        for (var champion in three_cost_dict) {
            if (three_cost_dict.hasOwnProperty(champion)) {
                championArray = championArray.concat([[champion, 3, three_cost_dict[champion], 0, false]])
            }
        }

        for (var champion in four_cost_dict) {
            if (four_cost_dict.hasOwnProperty(champion)) {
                championArray = championArray.concat([[champion, 4, four_cost_dict[champion], 0, false]])
            }
        }

        for (var champion in five_cost_dict) {
            if (five_cost_dict.hasOwnProperty(champion)) {
                championArray = championArray.concat([[champion, 5, five_cost_dict[champion], 0, false]])
            }
        }

        return championArray;

    }

    handleChampionCalculations(clickedChampInfo) {

        console.log(clickedChampInfo)
        var clonedChampionArray = this.state.championsArrayGlobal.slice()

        // for (var champion in clonedChampionArray) {
        //     var currentChampionInfo = clonedChampionArray[champion]
        //     if (clickedChampInfo[0] == currentChampionInfo[0]) {

        //         if (clonedChampionArray[champion][4]) {
        //             clonedChampionArray[champion][4] = false
        //         } else {
        //             clonedChampionArray[champion][4] = true
        //         }
        //     }
        // }

        if (clickedChampInfo[4]) {
            clickedChampInfo[4] = false
        } else {
            clickedChampInfo[4] = true
        }

        console.log(clickedChampInfo)


        for (var champion in clonedChampionArray) {
            var currentChampionInfo = this.state.championsArrayGlobal[champion]
            if (clickedChampInfo[0] != currentChampionInfo[0]) {
                if (currentChampionInfo[2][0] == clickedChampInfo[2][0] && currentChampionInfo[2][1] == clickedChampInfo[2][1]) {

                    //console.log(clonedChampionArray[champion][4])
                    if (clickedChampInfo[4]) {
                        currentChampionInfo[3] += 2
                    } else {
                        currentChampionInfo[3] -= 2
                    }

                }
                else if (currentChampionInfo[2][0] == clickedChampInfo[2][0] || currentChampionInfo[2][1] == clickedChampInfo[2][1]) {
                    if (clickedChampInfo[4]) {
                        currentChampionInfo[3] += 1
                    } else {
                        currentChampionInfo[3] -= 1
                    }
                }
            }
        }



        this.setState({
            championsArrayGlobal: clonedChampionArray
        })

    }

    render() {

        console.log("render!")

        var displayIconsOneCost = []
        var displayIconsTwoCost = []
        var displayIconsThreeCost = []
        var displayIconsFourCost = []
        var displayIconsFiveCost = []

        for (var champion in this.state.championsArrayGlobal) {

            var currentChampionInfo = this.state.championsArrayGlobal[champion]

            if (one_cost_dict.hasOwnProperty(currentChampionInfo[0])) {
                displayIconsOneCost.push(
                    <Tile
                        key={currentChampionInfo[0]}
                        championInfo={currentChampionInfo}
                        onClick={(ci) => this.handleChampionCalculations(ci)} />
                )
            }

            else if (two_cost_dict.hasOwnProperty(currentChampionInfo[0])) {
                displayIconsTwoCost.push(
                    <Tile
                        key={currentChampionInfo[0]}
                        championInfo={currentChampionInfo}
                        onClick={(ci) => this.handleChampionCalculations(ci)} />
                )
            }

            else if (three_cost_dict.hasOwnProperty(currentChampionInfo[0])) {
                displayIconsThreeCost.push(
                    <Tile
                        key={currentChampionInfo[0]}
                        championInfo={currentChampionInfo}
                        onClick={(ci) => this.handleChampionCalculations(ci)} />
                )
            }

            else if (four_cost_dict.hasOwnProperty(currentChampionInfo[0])) {
                displayIconsFourCost.push(
                    <Tile
                        key={currentChampionInfo[0]}
                        championInfo={currentChampionInfo}
                        onClick={(ci) => this.handleChampionCalculations(ci)} />
                )
            }

            else if (five_cost_dict.hasOwnProperty(currentChampionInfo[0])) {
                displayIconsFiveCost.push(
                    <Tile
                        key={currentChampionInfo[0]}
                        championInfo={currentChampionInfo}
                        onClick={(ci) => this.handleChampionCalculations(ci)} />
                )
            }

        }

        return (
            <div>
                <div className="tierRow">
                    {displayIconsOneCost}
                </div>
                <div className="tierRow">
                    {displayIconsTwoCost}
                </div>
                <div className="tierRow">
                    {displayIconsThreeCost}
                </div>
                <div className="tierRow">
                    {displayIconsFourCost}
                </div>
                <div className="tierRow">
                    {displayIconsFiveCost}
                </div>
            </div>
        );

    }
}

// ========================================

ReactDOM.render(
    <Board />,
    document.getElementById('root')
);


