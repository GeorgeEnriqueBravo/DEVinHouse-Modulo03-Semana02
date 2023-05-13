import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content.component';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { NOTIFICATIONS_MOCK } from 'src/app/utils/notifications-mock';
import { of } from 'rxjs';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;
  let notificationService = jasmine.createSpyObj(
                          NotificationService, ['getNotifications',
                                                'editNotificationApi',
                                                'removeNotification']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentComponent ],
      imports: [ HttpClientModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [{provide: NotificationService, useValue: notificationService}] // providers é sempre pra uso de services
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
  });

  it('should create Content', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit - deve ser executado com sucesso', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();

    expect(component.ngOnInit).toHaveBeenCalled();
  })

  it('ngOnInit - deve chamar o método carregarNotificacoes executado com sucesso', () => {
    spyOn(component, 'carregarNotificacoes');
    component.ngOnInit();

    expect(component.carregarNotificacoes).toHaveBeenCalled();
  })

  it('atualizarLista - deve chamar o método carregarNotificacoes executado com sucesso', () => {
    spyOn(component, 'carregarNotificacoes');
    component.atualizarLista();

    expect(component.carregarNotificacoes).toHaveBeenCalled();
  })

  it('carregarNotificacoes - deve retornar uma lista de notificações com sucesso', () => {
    notificationService.getNotifications.and.returnValue(of(NOTIFICATIONS_MOCK)); // 1 - mockei o retorno do getNotifications e ele retorna uma lista

    component.carregarNotificacoes(); // 2 - chamo o método

    expect(notificationService.getNotifications).toHaveBeenCalled(); // verifica se a notificationService chamou o getNotifications pra verificar se o item 1 e 2 deram certo
    expect(component.listaDeNotificacoes).toEqual(NOTIFICATIONS_MOCK); // verifica se durante o mock do item 1 ele recebeu uma lista realmente
  })

  it('carregarNotificacoes - deve chamar o método com sucesso', () => {
    spyOn(component, 'carregarNotificacoes');
    component.carregarNotificacoes();

    expect(component.carregarNotificacoes).toHaveBeenCalled();
  })

  it('lerNotificacao - deve chamar o método atualizarLista com sucesso', () => {
    spyOn(component, 'atualizarLista');
    const notificationMock = {aplicativo: '', titulo:'', descricao: '', tempoPublicacao: '',
                            imagem: '', lido: false, id: 1};

    const notificationEditMock = {...notificationMock, lido: true};
    notificationService.editNotificationApi.and.returnValue(of({}));
   
    component.lerNotificacao(notificationMock);
    
    expect(notificationService.editNotificationApi).toHaveBeenCalledOnceWith(notificationEditMock);
    expect(component.atualizarLista).toHaveBeenCalled();
  });

  it('removerNotificacao - validar as chamadas: removeNotification e atualizarLista com sucesso', () => {
    spyOn(component, 'atualizarLista');
    notificationService.removeNotification.and.returnValue(of({}));

    component.removerNotificacao(1);

    expect(notificationService.removeNotification).toHaveBeenCalled();
    expect(component.atualizarLista).toHaveBeenCalled();
  })
});

// CTRL + .  serve pra importar as classes
