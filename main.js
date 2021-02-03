let select = document.querySelector('#select');
let upload = document.querySelector('#upload');
let download = document.querySelector('#retrive');
let imgSrc = document.querySelector('img');

let ImageName, ImageURL;
let files = [] ;
let reader;
let getDownloadUrl;

select.addEventListener('click', (e) => {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = e => {
        files = e.target.files;
        reader = new FileReader();
        reader.onload = () =>{
            imgSrc.src = reader.result;
        }
        reader.readAsDataURL(files[0]);
    }
    input.click();
})

// Upload 

upload.addEventListener('click', () => {
    ImageName = document.querySelector('#name').value;
    let uploadTask = firebase.storage().ref('IMG/'+ImageName+".png").put(files[0]);
    uploadTask.on('state_changed', function(snapshot){
        
    },
    function(error){
        alert('Something went Wrong  error!!');
    },
    // function(){
    //     uploadTask.snapshot.ref.getDownloadUrl().then(function(url){
    //         ImageURL = url;
    //         firebase.database().ref('Pictures/'+ImageName).set({
    //             Name : ImageName,
    //             Link : ImageURL
    //         });
    //         alert('Image added successfully')
    //     })
    // }
    )
})