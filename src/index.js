import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



var five_cost_dict = {
    "Anivia": [4, 4],
    "Kaisa": [8, 12],
    "Karthus": [10, 10],
    "Kayle": [7, 7],
    "MissFortune": [6, 9],
    "Pantheon": [5, 2],
    "Swain": [9, 1],
    "Yasuo": [2, 3]
}


var four_cost_dict = {
    "Akali": [1, 8],
    "AurelionSol": [10, 2],
    "Brand": [4, 1],
    "Chogath": [3, 12],
    "Draven": [2, 6],
    "Gnar": [9, 14],
    "Jinx": [6, 5],
    "Kindred": [8, 10],
    "Leona": [5, 7],
    "Sejuani": [7, 4]
}

var three_cost_dict = {
    "Kennen": [4, 8],
    "Shyvana": [9, 2],
    "Katarina": [1, 6],
    "Poppy": [7, 14],
    "Rengar": [1, 13],
    "Aatrox": [2, 1],
    "Ashe": [8, 4],
    "Evelynn": [1, 1],
    "Morgana": [10, 1],
    "Vi": [3, 5],
    "Gangplank": [6, 9],
    "Veigar": [10, 14],
    "Volibear": [3, 4]
}

var two_cost_dict = {
    "Lucian": [6, 7],
    "Zed": [1, 8],
    "Ahri": [10, 13],
    "Blitzcrank": [3, 11],
    "Lissandra": [4, 4],
    "Lulu": [10, 14],
    "Pyke": [1, 9],
    "Varus": [8, 1],
    "Jayce": [9, 5],
    "Braum": [5, 4],
    "Reksai": [3, 12],
    "Shen": [2, 8],
    "TwistedFate": [10, 9]
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

        //console.log(clickedChampInfo)
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

        //console.log(clickedChampInfo)


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

        //console.log("render!")

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


