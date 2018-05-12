import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {

  public model : User;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public toast: ToastController,
              public userProvider: UserProvider) {
  
    this.model = new User();
    this.model.email = 'sidney@fife.com.br';
    this.model.password = 'teste';            
  }

  async onSubmit(){

    const result : any= await this.userProvider.createAccount(this.model.email, this.model.password);

    // async
    try {
      this.toast.create({
        message: 'Usuário criado com sucesso. Token:'+result.token,
        duration: 3000
      }).present();
    }  catch(e) {
      console.log("Erro ao criar usuário");
    }
    
    // this.userProvider.createAccount(this.model.email, this.model.password)
    // .then((result : any) => {
    //   this.toast.create({
    //     message: 'Usuário criado com sucesso. Token:'+result.token,
    //     duration: 3000
    //   }).present();
    // })
    // .catch((error : any) => {
    //   console.log("Erro ao criar usuário");
    // });
    
  }

}

export class User {
  public email: string;
  public password: string;
}
