// Function to create user profiles
function createUserProfiles(originalNames, modifiedNames) {
    
    let profiles = [];

    let id = 1;

    for (let i = 0; i < originalNames.length; i++) {

        let profile = {
            originalName: originalNames[i],
            modifiedName: modifiedNames[i],
            id: id++
        };

        profiles.push(profile);
    }
    return profiles;
}

