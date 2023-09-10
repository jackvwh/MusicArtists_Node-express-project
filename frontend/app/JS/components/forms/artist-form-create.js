export function artistFormCreate() {
  const artistFormCreate = /*html*/ `
            <h2>Create Artist</h2>
            <form id="artist-form">   
                <label for="name">Name</label>
                <input type="text" name="name" id="name" required>
                
                <label for="image">Image</label>
                <input type="url" name="image" id="image" required>

                <label for="birthdate">Birthdate</label>
                <input type="date" name="birthdate" id="birthdate" required>

                <label for="activeSince">Active Since (Year)</label>
                <input type="text" name="activeSince" id="activeSince" required>

                <label for="shortDescription">Description</label>
                <input type="text" name="shortDescription" id="shortDescription" required>

                <label for="website">Website</label>
                <input type="url" name="website" id="website" required>

            <fieldset> 
                    <legend>Genres</legend>
                    <div>
                        <input type="checkbox" name="rap" id="rap">
                        <label for="rap">Rap</label>
                    </div>
                    <div>
                        <input type="checkbox" name="pop" id="pop" >
                        <label for="pop">Pop</label>
                    </div>
                    <div>
                        <input type="checkbox" name="rock" id="rock" >
                        <label for="rock">Rock</label>
                    </div>
                    <div>
                        <input type="checkbox" name="reggae" id="reggae" >
                        <label for="reggae">Reggae</label>
                    </div>
                    <div>
                        <input type="checkbox" name="rnb" id="rnb" >
                        <label for="rnb">R&B</label>
                    </div>
                    <div>
                        <input type="checkbox" name="hiphop" id="hiphop" >
                        <label for="hiphop">Hip-Hop</label>
                    </div>
                    <div>
                        <input type="checkbox" name="country" id="country" >
                        <label for="country">Country</label>
                    </div>
                    <div>
                        <input type="checkbox" name="jazz" id="jazz" >
                        <label for="jazz">Jazz</label>
                    </div>
                    <div>
                        <input type="checkbox" name="blues" id="blues" >
                        <label for="blues">Blues</label>
                    </div>
                    <div>
                        <input type="checkbox" name="electronic" id="electronic" >
                        <label for="electronic">Electronic</label>
                    </div>
                    <div>
                        <input type="checkbox" name="latin" id="latin" >
                        <label for="latin">Latin</label>
                    </div>
                    <div>
                        <input type="checkbox" name="folk" id="folk" >
                        <label for="folk">Folk</label>
                    </div>
                    <div>
                        <input type="checkbox" name="classical" id="classical" >
                        <label for="classical">Classical</label>
                    </div>
                    <div>
                        <input type="checkbox" name="metal" id="metal" >
                        <label for="metal">Metal</label>
                    </div>
                    <div>
                        <input type="checkbox" name="soul" id="soul" >
                        <label for="soul">Soul</label>
                    </div>
                </fieldset>

                <fieldset> 
                    <legend>Labels</legend>
                    <div>
                        <input type="checkbox" name="xlRecordings" id="xlRecordings">
                        <label for="xlRecordings"></label>
                    </div>
                    <div>
                        <input type="checkbox" name="columbiaRecords" id="columbiaRecords" >
                        <label for="columbiaRecords">Columbia Records</label>
                    </div>
                    <div>
                        <input type="checkbox" name="defJamRecordings" id="defJamRecordings" >
                        <label for="defJamRecordings">Def Jam Recordings</label>
                    </div>
                    <div>
                        <input type="checkbox" name="rocNation" id="rocNation" >
                        <label for="rocNation">Roc Nation</label>
                    </div>
                    <div>
                        <input type="checkbox" name="rbmg" id="rbmg" >
                        <label for="rbmg">RBMG</label>
                    </div>
                    <div>
                        <input type="checkbox" name="ovoSound" id="ovoSound" >
                        <label for="ovoSound">OVO Sound</label>
                    </div>
                    <div>
                        <input type="checkbox" name="parkwoodEntertainment" id="parkwoodEntertainment" >
                        <label for="parkwoodEntertainment">Parkwood Entertainment</label>
                    </div>
                    <div>
                        <input type="checkbox" name="topDawgEntertainment" id="topDawgEntertainment" >
                        <label for="topDawgEntertainment">Top Dawg Entertainment</label>
                    </div>
                    <div>
                        <input type="checkbox" name="interscopeRecords" id="interscopeRecords" >
                        <label for="interscopeRecords">Interscope Records</label>
                    </div>
                    <div>
                        <input type="checkbox" name="atlanticRecords" id="atlanticRecords" >
                        <label for="atlanticRecords">Atlantic Records</label>
                    </div>
                    <div>
                        <input type="checkbox" name="asylumRecords" id="asylumRecords" >
                        <label for="asylumRecords">Asylum Records</label>
                    </div>
                </fieldset>

                <button type="submit">Submit</button>
                <button type="button" id="btn-close">Close</button>
            </form>
    `;
  return artistFormCreate;
}
