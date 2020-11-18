import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  nick;
  mensagem;
  mensagem_complementar;

  bancoDeNicks = {
    Hynn: {
      contador: 1,
      sobre: 'Supostamente deveria ser o desenvolvedor que faria esse APP funcionar como deveria, mas aparentemente não está sendo'
    },
    Camila: {
      contador: 1,
      sobre: 'Palestrante animada que passou um exercícío'
    },
    Pedro: {
      contador: 1,
      sobre: 'Rapaz aleatório'
    },
  };

  constructor() { }

  ngOnInit(): void {
  }

  fazerBusca(nick)
  {
    this.confereNick(nick = nick.charAt(0).toUpperCase() + nick.slice(1));

    this.mensagem = `Você pesquisou pelo nick <strong>${nick}</strong> ${this.bancoDeNicks[nick]['contador']} vezes.`;
    this.mensagem_complementar = this.bancoDeNicks[nick]['sobre'];
    this.bancoDeNicks[nick]['contador']++;
  }

  confereNick(nick)
  {
    if(typeof this.bancoDeNicks[nick] === 'undefined')
    {
      console.log(nick);
      this.bancoDeNicks[nick] = {
        contador: 0,
        sobre: 'Nenhuma informação disponível sobre essa pessoa'
      }
      return;
    }
  }

}
