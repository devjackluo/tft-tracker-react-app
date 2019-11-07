import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



var five_cost_dict = {
    "Yi": [[11], [8,5]],
    "Nami": [[9], [8]],
    "Singed": [[10], [1]],
    "Taric": [[2], [12]],
    "Zed": [[4], [11,2]]
}

var four_cost_dict = {
    "Annie": [[6], [11]],
    "Ashe": [[2], [10]],
    "Brand": [[6], [7]],
    "Janna": [[1], [8]],
    "Khazix": [[3], [2]],
    "Malphite": [[8], [12]],
    "Olaf": [[5], [4]],
    "Twitch": [[10], [10]],
    "Yorick": [[7], [11]]
}

var three_cost_dict = {
    "Aatrox": [[7], [5]],
    "Azir": [[3], [11]],
    "Mundo": [[10], [4]],
    "Ezreal": [[5], [10]],
    "Kindred": [[11,6], [10]],
    "Nautilus": [[9], [12]],
    "Nocturne": [[12], [2]],
    "Qiyana": [[13], [2]],
    "Sion": [[11], [4]],
    "Sivir": [[3], [5]],
    "Soraka": [[7], [8]],
    "Veigar": [[11], [7]]
}

var two_cost_dict = {
    "Braum": [[5], [12]],
    "Diana": [[6], [2]],
    "Jax": [[7], [4]],
    "Leblanc": [[14], [7,2]],
    "Malzahar": [[11], [11]],
    "Neeko": [[14], [6]],
    "Reksai": [[12], [9]],
    "Skarner": [[2], [9]],
    "Syndra": [[9], [7]],
    "Thresh": [[9], [12]],
    "Varus": [[6], [10]],
    "Volibear": [[4,5], [4]],
    "Yasuo": [[1], [5]]
}

var one_cost_dict = {
    "Ivern": [[14], [6]],
    "Kogmaw": [[10], [9]],
    "Maokai": [[14], [6]],
    "Nasus": [[7], [12]],
    "Ornn": [[4], [12]],
    "Renekton": [[3], [4]],
    "Taliyah": [[8], [7]],
    "Vayne": [[7], [10]],
    "Vladimir": [[9], [7]],
    "Warwick": [[5], [9]],
    "Zyra": [[6], [11]]
}


var tft_class = {
    1: "Alchemist",
    2: "Assassin",
    3: "Avatar",
    4: "Berserker",
    5: "Blademaster",
    6: "Druid",
    7: "Mage",
    8: "Mystic",
    9: "Predator",
    10: "Ranger",
    11: "Summoner",
    12: "Warden"
}

var tft_origin = {
    1: "Cloud",
    2: "Crystal",
    3: "Desert",
    4: "Electric",
    5: "Glacial",
    6: "Inferno",
    7: "Light",
    8: "Mountain",
    9: "Ocean",
    10: "Poison",
    11: "Shadow",
    12: "Steel",
    13: "Variable",
    14: "Woodland"
}

var tft_class_rules = {
    1: [1],
    2: [3,6],
    3: [1],
    4: [3,6],
    5: [2,4,6],
    6: [2],
    7: [3,6],
    8: [2,4],
    9: [3],
    10: [2,4,6],
    11: [3,6],
    12: [2,4,6]
}

var tft_origin_rules = {
    1: [2,3,4],
    2: [2,4],
    3: [2,4],
    4: [2,3,4],
    5: [2,4,6],
    6: [3,6,9],
    7: [3,6,9],
    8: [2],
    9: [2,4,6],
    10: [3],
    11: [2,4],
    12: [2,3,4],
    13: [1],
    14: [3]
}



class Tile extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        var sectionStyle = null

        if (this.props.championInfo[4]) {
            sectionStyle = {
                backgroundImage: "url(icons/" + this.props.championInfo[0] + ".png)",
                border: "rgba(0,0,255,1) calc(1vw) solid",
                opacity: ".4"
            }
        } else if (this.props.championInfo[3] == 1) {
            sectionStyle = {
                backgroundImage: "url(icons/" + this.props.championInfo[0] + ".png)",
                border: "rgba(115,105,2,1) calc(1vw) solid",
            }
        } else if (this.props.championInfo[3] == 2) {
            sectionStyle = {
                backgroundImage: "url(icons/" + this.props.championInfo[0] + ".png)",
                border: "rgba(165,85,0,1) calc(1vw) solid",
            }
        } else if (this.props.championInfo[3] == 3) {
            sectionStyle = {
                backgroundImage: "url(icons/" + this.props.championInfo[0] + ".png)",
                border: "rgba(195,45,0,1) calc(1vw) solid",
            }
        } else if (this.props.championInfo[3] >= 4) {
            sectionStyle = {
                backgroundImage: "url(icons/" + this.props.championInfo[0] + ".png)",
                border: "rgba(255,0,0,1) calc(1vw) solid",
            }
        } 
        else {
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


        var clonedChampionArray = this.state.championsArrayGlobal.slice()


        if (clickedChampInfo[4]) {
            clickedChampInfo[4] = false
        } else {
            clickedChampInfo[4] = true
        }


        var classMatchCompletionArray = []
        var originMatchCompletionArray = []
        
        for (var champion in clonedChampionArray) {

            var currentChampionInfo = this.state.championsArrayGlobal[champion]

            if (clickedChampInfo[0] != currentChampionInfo[0]) {


                for (var clickedChampionClass in clickedChampInfo[2][0]){
                    
                    for(var currentChampionClass in currentChampionInfo[2][0]){

                        if (clickedChampInfo[2][0][clickedChampionClass] == currentChampionInfo[2][0][currentChampionClass]){
                            

                            if(currentChampionInfo[4]){
                                classMatchCompletionArray.push(clickedChampInfo[2][0][clickedChampionClass])
                            }

                            if(clickedChampInfo[4]){
                                currentChampionInfo[3] += 1
                            }else{
                                currentChampionInfo[3] -= 1
                            }

                        }
                    }

                }


                for (var clickedChampionOrigin in clickedChampInfo[2][1]){
                    
                    for(var currentChampionOrigin in currentChampionInfo[2][1]){

                        if (clickedChampInfo[2][1][clickedChampionOrigin] == currentChampionInfo[2][1][currentChampionOrigin]){
                            

                            if(currentChampionInfo[4]){
                                originMatchCompletionArray.push(clickedChampInfo[2][1][clickedChampionOrigin])
                            }

                            if(clickedChampInfo[4]){
                                currentChampionInfo[3] += 1
                            }else{
                                currentChampionInfo[3] -= 1
                            }
                            
                        }

                    }

                }

            }
        }


        this.setState({
            championsArrayGlobal: clonedChampionArray
        })

    }

    clearBoard() {
        this.setState({
            championsArrayGlobal: this.initializeChampionArray()
        })
    }

    render() {


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

                <div className="tierRow clearBtn">
                    <button onClick={() => this.clearBoard()}>CLEAR</button>
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


