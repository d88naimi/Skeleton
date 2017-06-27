import axios from "axios"; 

// export function fileChanged(file) {
//   console.log(this.fileUpload);
//     // const file = this.files[0];
//     // if (!file) return alert('No file selected.');
//     // showLoadingCircle();
//     // getSignedRequestAndUpload(file)
//     //   .then(url => {
//     //     $('.image-container img').attr('src', url);
//     //     saveProfileImageUrl(url);
//     //   });
//   }


// export function getSignedRequestAndUpload(file) {
//     const url = '/api/photo/s3-signed-req';
//     return axios.get(url, {
//       params: {
//         'file-name': file.name,
//         'file-type': file.type
//       }
//     })
//     .then(res => res.data)
//     .then(res => {
//       file.name = res.filename;
//       return res;
//       // return uploadToS3(file, res.signedRequest, res.url);
//     })
//     .catch(e => alert('Could not upload file.'));
//   }

// export function uploadToS3(file, signedRequest, url) {
//     return axios.put(signedRequest, {
//       data: file,
//       headers: {
//         'Content-Type': file.type
//       }
//     }).then(() => {
//       return url;
//     });
//   }

// export function saveProfileImageUrl(photo) {
//     $.ajax({
//       type: 'PUT',
//       url: '/api/user/profile-image',
//       data: {photo}
//     }).then(() => {
//       hideLoadingCircle();
//       const alert = $('#upload-complete-alert');
//       alert.fadeIn('slow', function () {
//         setTimeout(() => alert.fadeOut(), 3000);
//       });
//     })
//   }