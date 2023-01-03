module.exports = function toReadable (number) {
        let result;
        let par = String(number);
        let zeroToNine = ['zero','one','two','three','four','five','six','seven','eight','nine'];
        let tenToNineteen = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
        let twentyToNinety =['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
        let hundred = 'hundred';
        if (par.length === 1) {
            return result = zeroToNine[number];
        } else if(par.length === 2 & par[0] === '1'){
            return result = tenToNineteen[+par[1]];
        }else if(par.length === 2 & par[0] === '2' & par[1] === '0'){
            return result = twentyToNinety[0];   
        }else if(par.length === 2 & par[0] === '2') {
            return result = `${twentyToNinety[0]} ${zeroToNine[+par[1]]}`;
        }else if(par.length === 2 & par[0] === '3' & par[1] === '0'){
            return result = twentyToNinety[1];   
        } else if(par.length === 2 & par[0] === '3') {
            return result = `${twentyToNinety[1]} ${zeroToNine[+par[1]]}`;
        }else if(par.length === 2 & par[0] === '4' & par[1] === '0'){
            return result = twentyToNinety[2];   
        } else if(par.length === 2 & par[0] === '4') {
            return result = `${twentyToNinety[2]} ${zeroToNine[+par[1]]}`;
        }else if(par.length === 2 & par[0] === '5' & par[1] === '0'){
            return result = twentyToNinety[3];   
        } else if(par.length === 2 & par[0] === '5') {
            return result = `${twentyToNinety[3]} ${zeroToNine[+par[1]]}`;
        }else if(par.length === 2 & par[0] === '6' & par[1] === '0'){
            return result = twentyToNinety[4];   
        } else if(par.length === 2 & par[0] === '6') {
            return result = `${twentyToNinety[4]} ${zeroToNine[+par[1]]}`;
        }else if(par.length === 2 & par[0] === '7' & par[1] === '0'){
            return result = twentyToNinety[5];   
        } else if(par.length === 2 & par[0] === '7') {
            return result = `${twentyToNinety[5]} ${zeroToNine[+par[1]]}`;
        }else if(par.length === 2 & par[0] === '8' & par[1] === '0'){
            return result = twentyToNinety[6];   
        } else if(par.length === 2 & par[0] === '8') {
            return result = `${twentyToNinety[6]} ${zeroToNine[+par[1]]}`;
        }else if(par.length === 2 & par[0] === '9' & par[1] === '0'){
            return result = twentyToNinety[7];   
        }else if(par.length === 2 & par[0] === '9') {
            return result = `${twentyToNinety[7]} ${zeroToNine[+par[1]]}`;
        }else if(number === 100) {
            return `one ${hundred}`;
        }else if(par.length === 3 & par[0] === '1' & par[1] === '0'){
            return result = `one ${hundred} ${zeroToNine[+par[2]]}`;
        }else if(par.length === 3 & par[0] === '1'){
            if (par[1] === '1') {
                return result = `one ${hundred} ${tenToNineteen[+par[2]]}`;
            } else if (par[1] === '2' & par[2] === '0') {
                return result = `one ${hundred} ${twentyToNinety[0]}`;
            }else if (par[1] === '2') {
                return result = `one ${hundred} ${twentyToNinety[0]} ${zeroToNine[+par[2]]}`;
            }else if (par[1] === '3' & par[2] === '0') {
                return result = `one ${hundred} ${twentyToNinety[1]}`;
            }else if (par[1] === '3') {
                return result = `one ${hundred} ${twentyToNinety[1]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '4' & par[2] === '0') {
                return result = `one ${hundred} ${twentyToNinety[2]}`;
            }else if (par[1] === '4') {
                return result = `one ${hundred} ${twentyToNinety[2]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '5' & par[2] === '0') {
                return result = `one ${hundred} ${twentyToNinety[3]}`;
            }else if (par[1] === '5') {
                return result = `one ${hundred} ${twentyToNinety[3]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '6' & par[2] === '0') {
                return result = `one ${hundred} ${twentyToNinety[4]}`;
            }else if (par[1] === '6') {
                return result = `one ${hundred} ${twentyToNinety[4]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '7' & par[2] === '0') {
                return result = `one ${hundred} ${twentyToNinety[5]}`;
            }else if (par[1] === '7') {
                return result = `one ${hundred} ${twentyToNinety[5]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '8' & par[2] === '0') {
                return result = `one ${hundred} ${twentyToNinety[6]}`;
            }else if (par[1] === '8') {
                return result = `one ${hundred} ${twentyToNinety[6]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '9' & par[2] === '0') {
                return result = `one ${hundred} ${twentyToNinety[7]}`;
            }else if (par[1] === '9') {
                return result = `one ${hundred} ${twentyToNinety[7]} ${zeroToNine[+par[2]]}`;
            }
            
        }else if(number === 200) {
            return `two ${hundred}`;
        }else if(par.length === 3 & par[0] === '2' & par[1] === '0'){
            return result = `two ${hundred} ${zeroToNine[+par[2]]}`;
        }else if(par.length === 3 & par[0] === '2'){
            if (par[1] === '1') {
                return result = `two ${hundred} ${tenToNineteen[+par[2]]}`;
            } else if (par[1] === '2' & par[2] === '0') {
                return result = `two ${hundred} ${twentyToNinety[0]}`;
            }else if (par[1] === '2') {
                return result = `two ${hundred} ${twentyToNinety[0]} ${zeroToNine[+par[2]]}`;
            }else if (par[1] === '3' & par[2] === '0') {
                return result = `two ${hundred} ${twentyToNinety[1]}`;
            }else if (par[1] === '3') {
                return result = `two ${hundred} ${twentyToNinety[1]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '4' & par[2] === '0') {
                return result = `two ${hundred} ${twentyToNinety[2]}`;
            }else if (par[1] === '4') {
                return result = `two ${hundred} ${twentyToNinety[2]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '5' & par[2] === '0') {
                return result = `two ${hundred} ${twentyToNinety[3]}`;
            }else if (par[1] === '5') {
                return result = `two ${hundred} ${twentyToNinety[3]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '6' & par[2] === '0') {
                return result = `two ${hundred} ${twentyToNinety[4]}`;
            }else if (par[1] === '6') {
                return result = `two ${hundred} ${twentyToNinety[4]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '7' & par[2] === '0') {
                return result = `two ${hundred} ${twentyToNinety[5]}`;
            }else if (par[1] === '7') {
                return result = `two ${hundred} ${twentyToNinety[5]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '8' & par[2] === '0') {
                return result = `two ${hundred} ${twentyToNinety[6]}`;
            }else if (par[1] === '8') {
                return result = `two ${hundred} ${twentyToNinety[6]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '9' & par[2] === '0') {
                return result = `two ${hundred} ${twentyToNinety[7]}`;
            }else if (par[1] === '9') {
                return result = `two ${hundred} ${twentyToNinety[7]} ${zeroToNine[+par[2]]}`;
            }
            
        }else if(number === 300) {
            return `three ${hundred}`;
        }else if(par.length === 3 & par[0] === '3' & par[1] === '0'){
            return result = `three ${hundred} ${zeroToNine[+par[2]]}`;
        }else if(par.length === 3 & par[0] === '3'){
            if (par[1] === '1') {
                return result = `three ${hundred} ${tenToNineteen[+par[2]]}`;
            } else if (par[1] === '2' & par[2] === '0') {
                return result = `three ${hundred} ${twentyToNinety[0]}`;
            }else if (par[1] === '2') {
                return result = `three ${hundred} ${twentyToNinety[0]} ${zeroToNine[+par[2]]}`;
            }else if (par[1] === '3' & par[2] === '0') {
                return result = `three ${hundred} ${twentyToNinety[1]}`;
            }else if (par[1] === '3') {
                return result = `three ${hundred} ${twentyToNinety[1]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '4' & par[2] === '0') {
                return result = `three ${hundred} ${twentyToNinety[2]}`;
            }else if (par[1] === '4') {
                return result = `three ${hundred} ${twentyToNinety[2]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '5' & par[2] === '0') {
                return result = `three ${hundred} ${twentyToNinety[3]}`;
            }else if (par[1] === '5') {
                return result = `three ${hundred} ${twentyToNinety[3]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '6' & par[2] === '0') {
                return result = `three ${hundred} ${twentyToNinety[4]}`;
            }else if (par[1] === '6') {
                return result = `three ${hundred} ${twentyToNinety[4]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '7' & par[2] === '0') {
                return result = `three ${hundred} ${twentyToNinety[5]}`;
            }else if (par[1] === '7') {
                return result = `three ${hundred} ${twentyToNinety[5]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '8' & par[2] === '0') {
                return result = `three ${hundred} ${twentyToNinety[6]}`;
            }else if (par[1] === '8') {
                return result = `three ${hundred} ${twentyToNinety[6]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '9' & par[2] === '0') {
                return result = `three ${hundred} ${twentyToNinety[7]}`;
            }else if (par[1] === '9') {
                return result = `three ${hundred} ${twentyToNinety[7]} ${zeroToNine[+par[2]]}`;
            }
            
        }else if(number === 400) {
            return `four ${hundred}`;
        }else if(par.length === 3 & par[0] === '4' & par[1] === '0'){
            return result = `four ${hundred} ${zeroToNine[+par[2]]}`;
        }else if(par.length === 3 & par[0] === '4'){
            if (par[1] === '1') {
                return result = `four ${hundred} ${tenToNineteen[+par[2]]}`;
            } else if (par[1] === '2' & par[2] === '0') {
                return result = `four ${hundred} ${twentyToNinety[0]}`;
            }else if (par[1] === '2') {
                return result = `four ${hundred} ${twentyToNinety[0]} ${zeroToNine[+par[2]]}`;
            }else if (par[1] === '3' & par[2] === '0') {
                return result = `four ${hundred} ${twentyToNinety[1]}`;
            }else if (par[1] === '3') {
                return result = `four ${hundred} ${twentyToNinety[1]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '4' & par[2] === '0') {
                return result = `four ${hundred} ${twentyToNinety[2]}`;
            }else if (par[1] === '4') {
                return result = `four ${hundred} ${twentyToNinety[2]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '5' & par[2] === '0') {
                return result = `four ${hundred} ${twentyToNinety[3]}`;
            }else if (par[1] === '5') {
                return result = `four ${hundred} ${twentyToNinety[3]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '6' & par[2] === '0') {
                return result = `four ${hundred} ${twentyToNinety[4]}`;
            }else if (par[1] === '6') {
                return result = `four ${hundred} ${twentyToNinety[4]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '7' & par[2] === '0') {
                return result = `four ${hundred} ${twentyToNinety[5]}`;
            }else if (par[1] === '7') {
                return result = `four ${hundred} ${twentyToNinety[5]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '8' & par[2] === '0') {
                return result = `four ${hundred} ${twentyToNinety[6]}`;
            }else if (par[1] === '8') {
                return result = `four ${hundred} ${twentyToNinety[6]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '9' & par[2] === '0') {
                return result = `four ${hundred} ${twentyToNinety[7]}`;
            }else if (par[1] === '9') {
                return result = `four ${hundred} ${twentyToNinety[7]} ${zeroToNine[+par[2]]}`;
            }
            
        }else if(number === 500) {
            return `five ${hundred}`;
        }else if(par.length === 3 & par[0] === '5' & par[1] === '0'){
            return result = `five ${hundred} ${zeroToNine[+par[2]]}`;
        }else if(par.length === 3 & par[0] === '5'){
            if (par[1] === '1') {
                return result = `five ${hundred} ${tenToNineteen[+par[2]]}`;
            } else if (par[1] === '2' & par[2] === '0') {
                return result = `five ${hundred} ${twentyToNinety[0]}`;
            }else if (par[1] === '2') {
                return result = `five ${hundred} ${twentyToNinety[0]} ${zeroToNine[+par[2]]}`;
            }else if (par[1] === '3' & par[2] === '0') {
                return result = `five ${hundred} ${twentyToNinety[1]}`;
            }else if (par[1] === '3') {
                return result = `five ${hundred} ${twentyToNinety[1]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '4' & par[2] === '0') {
                return result = `five ${hundred} ${twentyToNinety[2]}`;
            }else if (par[1] === '4') {
                return result = `five ${hundred} ${twentyToNinety[2]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '5' & par[2] === '0') {
                return result = `five ${hundred} ${twentyToNinety[3]}`;
            }else if (par[1] === '5') {
                return result = `five ${hundred} ${twentyToNinety[3]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '6' & par[2] === '0') {
                return result = `five ${hundred} ${twentyToNinety[4]}`;
            }else if (par[1] === '6') {
                return result = `five ${hundred} ${twentyToNinety[4]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '7' & par[2] === '0') {
                return result = `five ${hundred} ${twentyToNinety[5]}`;
            }else if (par[1] === '7') {
                return result = `five ${hundred} ${twentyToNinety[5]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '8' & par[2] === '0') {
                return result = `five ${hundred} ${twentyToNinety[6]}`;
            }else if (par[1] === '8') {
                return result = `five ${hundred} ${twentyToNinety[6]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '9' & par[2] === '0') {
                return result = `five ${hundred} ${twentyToNinety[7]}`;
            }else if (par[1] === '9') {
                return result = `five ${hundred} ${twentyToNinety[7]} ${zeroToNine[+par[2]]}`;
            }
            
        }else if(number === 600) {
            return `six ${hundred}`;
        }else if(par.length === 3 & par[0] === '6' & par[1] === '0'){
            return result = `six ${hundred} ${zeroToNine[+par[2]]}`;
        }else if(par.length === 3 & par[0] === '6'){
            if (par[1] === '1') {
                return result = `six ${hundred} ${tenToNineteen[+par[2]]}`;
            } else if (par[1] === '2' & par[2] === '0') {
                return result = `six ${hundred} ${twentyToNinety[0]}`;
            }else if (par[1] === '2') {
                return result = `six ${hundred} ${twentyToNinety[0]} ${zeroToNine[+par[2]]}`;
            }else if (par[1] === '3' & par[2] === '0') {
                return result = `six ${hundred} ${twentyToNinety[1]}`;
            }else if (par[1] === '3') {
                return result = `six ${hundred} ${twentyToNinety[1]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '4' & par[2] === '0') {
                return result = `six ${hundred} ${twentyToNinety[2]}`;
            }else if (par[1] === '4') {
                return result = `six ${hundred} ${twentyToNinety[2]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '5' & par[2] === '0') {
                return result = `six ${hundred} ${twentyToNinety[3]}`;
            }else if (par[1] === '5') {
                return result = `six ${hundred} ${twentyToNinety[3]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '6' & par[2] === '0') {
                return result = `six ${hundred} ${twentyToNinety[4]}`;
            }else if (par[1] === '6') {
                return result = `six ${hundred} ${twentyToNinety[4]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '7' & par[2] === '0') {
                return result = `six ${hundred} ${twentyToNinety[5]}`;
            }else if (par[1] === '7') {
                return result = `six ${hundred} ${twentyToNinety[5]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '8' & par[2] === '0') {
                return result = `six ${hundred} ${twentyToNinety[6]}`;
            }else if (par[1] === '8') {
                return result = `six ${hundred} ${twentyToNinety[6]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '9' & par[2] === '0') {
                return result = `six ${hundred} ${twentyToNinety[7]}`;
            }else if (par[1] === '9') {
                return result = `six ${hundred} ${twentyToNinety[7]} ${zeroToNine[+par[2]]}`;
            }
            
        }else if(number === 700) {
            return `seven ${hundred}`;
        }else if(par.length === 3 & par[0] === '7' & par[1] === '0'){
            return result = `seven ${hundred} ${zeroToNine[+par[2]]}`;
        }else if(par.length === 3 & par[0] === '7'){
            if (par[1] === '1') {
                return result = `seven ${hundred} ${tenToNineteen[+par[2]]}`;
            } else if (par[1] === '2' & par[2] === '0') {
                return result = `seven ${hundred} ${twentyToNinety[0]}`;
            }else if (par[1] === '2') {
                return result = `seven ${hundred} ${twentyToNinety[0]} ${zeroToNine[+par[2]]}`;
            }else if (par[1] === '3' & par[2] === '0') {
                return result = `seven ${hundred} ${twentyToNinety[1]}`;
            }else if (par[1] === '3') {
                return result = `seven ${hundred} ${twentyToNinety[1]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '4' & par[2] === '0') {
                return result = `seven ${hundred} ${twentyToNinety[2]}`;
            }else if (par[1] === '4') {
                return result = `seven ${hundred} ${twentyToNinety[2]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '5' & par[2] === '0') {
                return result = `seven ${hundred} ${twentyToNinety[3]}`;
            }else if (par[1] === '5') {
                return result = `seven ${hundred} ${twentyToNinety[3]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '6' & par[2] === '0') {
                return result = `seven ${hundred} ${twentyToNinety[4]}`;
            }else if (par[1] === '6') {
                return result = `seven ${hundred} ${twentyToNinety[4]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '7' & par[2] === '0') {
                return result = `seven ${hundred} ${twentyToNinety[5]}`;
            }else if (par[1] === '7') {
                return result = `seven ${hundred} ${twentyToNinety[5]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '8' & par[2] === '0') {
                return result = `seven ${hundred} ${twentyToNinety[6]}`;
            }else if (par[1] === '8') {
                return result = `seven ${hundred} ${twentyToNinety[6]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '9' & par[2] === '0') {
                return result = `seven ${hundred} ${twentyToNinety[7]}`;
            }else if (par[1] === '9') {
                return result = `seven ${hundred} ${twentyToNinety[7]} ${zeroToNine[+par[2]]}`;
            }
            
        }else if(number === 800) {
            return `eight ${hundred}`;
        }else if(par.length === 3 & par[0] === '8' & par[1] === '0'){
            return result = `eight ${hundred} ${zeroToNine[+par[2]]}`;
        }else if(par.length === 3 & par[0] === '8'){
            if (par[1] === '1') {
                return result = `eight ${hundred} ${tenToNineteen[+par[2]]}`;
            } else if (par[1] === '2' & par[2] === '0') {
                return result = `eight ${hundred} ${twentyToNinety[0]}`;
            }else if (par[1] === '2') {
                return result = `eight ${hundred} ${twentyToNinety[0]} ${zeroToNine[+par[2]]}`;
            }else if (par[1] === '3' & par[2] === '0') {
                return result = `eight ${hundred} ${twentyToNinety[1]}`;
            }else if (par[1] === '3') {
                return result = `eight ${hundred} ${twentyToNinety[1]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '4' & par[2] === '0') {
                return result = `eight ${hundred} ${twentyToNinety[2]}`;
            }else if (par[1] === '4') {
                return result = `eight ${hundred} ${twentyToNinety[2]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '5' & par[2] === '0') {
                return result = `eight ${hundred} ${twentyToNinety[3]}`;
            }else if (par[1] === '5') {
                return result = `eight ${hundred} ${twentyToNinety[3]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '6' & par[2] === '0') {
                return result = `eight ${hundred} ${twentyToNinety[4]}`;
            }else if (par[1] === '6') {
                return result = `eight ${hundred} ${twentyToNinety[4]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '7' & par[2] === '0') {
                return result = `eight ${hundred} ${twentyToNinety[5]}`;
            }else if (par[1] === '7') {
                return result = `eight ${hundred} ${twentyToNinety[5]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '8' & par[2] === '0') {
                return result = `eight ${hundred} ${twentyToNinety[6]}`;
            }else if (par[1] === '8') {
                return result = `eight ${hundred} ${twentyToNinety[6]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '9' & par[2] === '0') {
                return result = `eight ${hundred} ${twentyToNinety[7]}`;
            }else if (par[1] === '9') {
                return result = `eight ${hundred} ${twentyToNinety[7]} ${zeroToNine[+par[2]]}`;
            }
            
        }else if(number === 900) {
            return `nine ${hundred}`;
        }else if(par.length === 3 & par[0] === '9' & par[1] === '0'){
            return result = `nine ${hundred} ${zeroToNine[+par[2]]}`;
        }else if(par.length === 3 & par[0] === '9'){
            if (par[1] === '1') {
                return result = `nine ${hundred} ${tenToNineteen[+par[2]]}`;
            } else if (par[1] === '2' & par[2] === '0') {
                return result = `nine ${hundred} ${twentyToNinety[0]}`;
            }else if (par[1] === '2') {
                return result = `nine ${hundred} ${twentyToNinety[0]} ${zeroToNine[+par[2]]}`;
            }else if (par[1] === '3' & par[2] === '0') {
                return result = `nine ${hundred} ${twentyToNinety[1]}`;
            }else if (par[1] === '3') {
                return result = `nine ${hundred} ${twentyToNinety[1]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '4' & par[2] === '0') {
                return result = `nine ${hundred} ${twentyToNinety[2]}`;
            }else if (par[1] === '4') {
                return result = `nine ${hundred} ${twentyToNinety[2]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '5' & par[2] === '0') {
                return result = `nine ${hundred} ${twentyToNinety[3]}`;
            }else if (par[1] === '5') {
                return result = `nine ${hundred} ${twentyToNinety[3]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '6' & par[2] === '0') {
                return result = `nine ${hundred} ${twentyToNinety[4]}`;
            }else if (par[1] === '6') {
                return result = `nine ${hundred} ${twentyToNinety[4]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '7' & par[2] === '0') {
                return result = `nine ${hundred} ${twentyToNinety[5]}`;
            }else if (par[1] === '7') {
                return result = `nine ${hundred} ${twentyToNinety[5]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '8' & par[2] === '0') {
                return result = `nine ${hundred} ${twentyToNinety[6]}`;
            }else if (par[1] === '8') {
                return result = `nine ${hundred} ${twentyToNinety[6]} ${zeroToNine[+par[2]]}`;
            }
            
            else if (par[1] === '9' & par[2] === '0') {
                return result = `nine ${hundred} ${twentyToNinety[7]}`;
            }else if (par[1] === '9') {
                return result = `nine ${hundred} ${twentyToNinety[7]} ${zeroToNine[+par[2]]}`;
            }
            
        }else if(number === 1000) {
            return "thousand";
        }
    
    
    
}
