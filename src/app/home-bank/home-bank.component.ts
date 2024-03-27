import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Billete {
  billete: string;
  valor: number;
  color: string;
  img: string;
}
@Component({
  selector: 'app-home-bank',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home-bank.component.html',
  // styleUrl: './home-bank.component.css'
})
export class HomeBankComponent {
  billetes: Billete[] = [
    {
      billete: '10k',
      valor: 10000,
      color: '#C3083F',
      img: 'https://www.periodico15.com/wp-content/uploads/2016/12/Captura-de-pantalla-2016-12-07-a-las-4.52.35-p.m..png',
    },
    {
      billete: '20k',
      valor: 20000,
      color: '#84BDDF',
      img: 'https://www.numismatica-visual.es/wp-content/uploads/2016/07/bi1.jpg?w=640',
    },
    {
      billete: '50k',
      valor: 50000,
      color: '#C3083F',
      img: 'https://i.pinimg.com/originals/f6/51/2e/f6512eed23dfebd7e37846c1e69e4451.jpg',
    },
    {
      billete: '100k',
      valor: 100000,
      color: '#08C33F',
      img: 'https://www.banrep.gov.co/docum/billetes/images/100000/anverso100000.jpg',
    },
  ];
  opciones = [
    {
      name: 'Depositar',
      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/money-3597246-3010226.png?f=webp',
    },
    {
      name: 'Retirar',
      img: 'https://static.vecteezy.com/system/resources/previews/022/442/216/original/icon-money-3d-illustration-png.png',
    },
    {
      name: 'Transferir',
      img: 'https://static.vecteezy.com/system/resources/previews/010/979/408/original/money-transfer-3d-illustration-png.png',
    },
    {
      name: 'Consultar',

      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/money-bag-5654697-4712953.png',
    },
  ];
  op = 'Home';
  cantidad = 0;
  verInput = false;
  billeteEntrega: Billete[] = [];
  capturarValor(event: any) {
    const valorInput = event.target.value;
    if (parseInt(valorInput) % 10000 === 0) {
      this.cantidad = +valorInput;
    } else {
      console.log('no es multiplo de 10000');
    }

    console.log(valorInput);
  }
  handleCantidad = (valor: string) => {
    this.cantidad = +valor;
    if (valor === 'Otro') {
      this.verInput = true;
    } else {
      this.verInput = false;
    }
  };
  numCuenta = 1022575805;
  saldo = 2000000;
  cargar = () => {
    var suma2 = 0;
    var contador = 0;
    if (this.cantidad % 10000 === 0) {
      this.saldo = this.saldo - this.cantidad;
      setTimeout(() => {
        alert('Retire su dinero por favor');
      }, 500);
    } else {
      setTimeout(() => {
        alert('Valor no permitido');
      }, 500);
      this.billeteEntrega = [];
    }

    if (this.cantidad > 0 ) {
      let updatedBilleteEntrega = [];


      while (suma2 < this.cantidad) {
        for (let index = contador; index < 4; index++) {
          if (suma2 + this.billetes[index].valor <= this.cantidad) {
            suma2 += this.billetes[index].valor;
            updatedBilleteEntrega.push(this.billetes[index]);
          }
        }
        contador++;
        if (contador === 3) {
          contador = 0;
        }
      }
      this.billeteEntrega = updatedBilleteEntrega;

      
    }
  };
  restartPage = () => {
    window.location.reload();
  };
  valorRetiro = [10000, 50000, 100000, 200000, 300000, 'Otro'];
  handleOp = (op: string) => {
    this.op = op;

    console.log('opcio:', this.op);
  };
  atras = () => {
    this.op = 'Home';
    this.cantidad = 0;
    this.verInput = false;
    this.billeteEntrega = [];
  };
  montoEnviar = 0;
  handleEnviar(event: any) {
    const valorInput = event.target.value;
    this.montoEnviar = +valorInput;
    console.log('enviar esto: e', event.target.value);
  }
  montoDepositar = 0;
  handleDepositar(event: any) {
    const valorInput = event.target.value;
    this.montoDepositar = +valorInput;
    console.log('depositar esto: e', event.target.value);
  }
  enviarTransferencia() {
    this.saldo = this.saldo - this.montoEnviar;
    alert('Transferecnia enviada correctamente');
  }
  depositarDinero() {
    this.saldo = this.saldo + this.montoDepositar;
    alert('Deposito realizado correctamente');
  }
  volver() {
    if (this.op === 'Home') {
      this.restartPage();
    } else {
      this.atras();
      console.log('ejecutar funcion atras');
    }
  }
}
