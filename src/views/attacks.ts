export interface attacks {
    start_time: number;
    elapsed: number;
    
    check_time(start_time: number, elapsed:number): boolean;
}

export class attack implements attacks{
    start_time = null;
    elapsed = null;

    constructor(){
        start_time: null;
        elapsed: 0;
    }

    /**Check if contract is up. If so return true othewise return false */
    check_time(start_time: number, elapsed: number): boolean{
        var current_time = new Date().getTime();
        let duration = (current_time - start_time) * 1000;   //gives us time in milliseconds. 

        if(duration >= elapsed){
            return true;
        }
        else{
            return false;
        }
    }

    start(start_time: number){
        start_time = new Date().getTime();
        return start_time;
    }

    set_duration(elapsed: number){
        elapsed = Math.floor(Math.random() * 80) + 1; //generate a random number between 1 and 60
    }


}