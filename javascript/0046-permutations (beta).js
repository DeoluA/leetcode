var permute = function(nums) {
        // base case
        if(nums.length === 1) {
            // return it as an array within an array, so it can be iterated over
            return [nums.slice()];
        };
        
        // this will store all outcomes
        let placements = [];

        for(let i = 0; i < nums.length; i++) {
            const n = nums.shift(0);    // <- remove first element

            let perms = permute(nums);  // <- permute again
            
            // to each element, add the initial number popped
            perms = perms.map((eachPerm) => {
                eachPerm.push(n);
                return eachPerm;
            });

            // spread the outcome into our final array
            placements.push(...perms.slice());

            // add the number back in for the next iteration
            nums.push(n);
        };

        return placements;

    };
