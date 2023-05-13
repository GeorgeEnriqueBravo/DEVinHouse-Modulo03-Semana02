import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationComponent } from './notification.component';
import { AppModule } from 'src/app/app.module';
import { NotificationService } from 'src/app/services/notification.service';
import { INotification } from 'src/app/models/notification.model';
import { of } from 'rxjs';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;
  let notificationService = jasmine.createSpyObj(
                          NotificationService, [
                            'addNotificationApi']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationComponent ],
      imports: [ AppModule ],
      providers: [{provide: NotificationService, useValue: notificationService}] // providers é sempre pra uso de services
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Component', () => {
    expect(component).toBeTruthy();
  });

  it('enviarForm - deve enviar o formulário com sucesso', () => {
    const novaNotificacao: INotification = {
      titulo: '',
      descricao: '',
      aplicativo: 'IFOOD',
      tempoPublicacao: 'Agora',
      imagem: 'assets/images/ifood.png',
      lido: false
    }

    notificationService.addNotificationApi.and.returnValue(of({}));
    // quando mockamos um método o retorno é opcional e pode ser qualquer coisa
    // caso formos utilizar esse retorno, colocamos o retorno que queremos
    // senão deixamos sem retorno mesmo

    spyOn(component.notificacaoCadastrada, 'emit');
    component.enviarForm();

    expect(notificationService.addNotificationApi).toHaveBeenCalledOnceWith(novaNotificacao);
    // nesse expect chama o addNotificationApi com o parametro novaNotificacao

    expect(component.notificacaoCadastrada.emit).toHaveBeenCalled();
  })
});
