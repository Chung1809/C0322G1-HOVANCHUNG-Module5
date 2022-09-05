import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../service/firebase.service";
import {Route, Router} from "@angular/router";
import {Firebase} from "../../model/firebase";
import {FormControl, FormGroup} from "@angular/forms";
import {finalize} from "rxjs/operators";
import {formatDate} from "@angular/common";
import {AngularFireStorage} from "@angular/fire/storage";


@Component({
  selector: 'app-create-firebase',
  templateUrl: './create-firebase.component.html',
  styleUrls: ['./create-firebase.component.css']
})
export class CreateFirebaseComponent implements OnInit {
  firebaseForm: FormGroup;
  selectedImage: File = null;
  constructor(private fb: FirebaseService,
              private route: Router,
              private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.firebaseForm = new FormGroup({
       name: new FormControl(''),
      image: new FormControl(''),
    })
  }


  submit() {
    // //Nơi lưu trữ firebase
    // const img = this.getCurrentDateTime() + this.selectedImage.name;
    // const filePath = `firebase/${img}`;
    // const fileImg = this.storage.ref(filePath);
    // console.log(this.firebaseForm.value)
    // this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
    //   finalize(()=>{
    //     fileImg.getDownloadURL().subscribe((url)=>{
    //       console.log(url)
    //       this.firebaseForm.patchValue({image: url});
    //       this.fb.save(this.firebaseForm.value).subscribe(()=>{
    //         this.route.navigateByUrl('/firebase')
    //       })
    //     })
    //   })
    // )

    const nameImg = this.getCurrentDateTime() + this.selectedImage.name;
    const filePath = `news/${nameImg}`;
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(`news/${nameImg}`, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.firebaseForm.patchValue({image: url});
          console.log(url);
          console.log(this.firebaseForm.value);
          this.fb.save(this.firebaseForm.value).subscribe(
            () => {
              this.route.navigateByUrl('/firebase')
            },
          );
        });
      })
    ).subscribe();
  }

  showImg(event: any) {
    console.log(event)
    // Khi upload file qua thẻ input thì nó sẽ kích hoạt sự kiện (onchange) và tất cả file được lưu trữ trong event.target.file
    this.selectedImage = event.target.files[0];
  }
  getCurrentDateTime(): string {
    return formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en-US');
  }
}
