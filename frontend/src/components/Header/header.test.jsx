import Enzyme from 'enzyme';
import { StaticRouter } from 'react-router-dom';
import adapter from 'enzyme-adapter-react-16';
import { Header } from './Header.jsx';
import React from 'react';


Enzyme.configure({ adapter: new adapter() });
describe('How header component renders', () => {
    it('should render profile and logout if user.props are given', () => {
        const headerMounted = Enzyme.mount(<StaticRouter><Header user={{}} /></StaticRouter>)
        expect(headerMounted.find('.baruser').length).toBe(1) // se espera que se encuentre en hoeaderMounted la clase .baruser y que saque la length. Tiene que ser toBe 1 porque se busca 1 componente.
        expect(headerMounted.find('.barguest').length).toBe(0) // se epsera que se encuentre la clase .barguess y que saque la length. Tiene que ser 0 porque no debe estar mostrada.
        headerMounted.unmount(); // desmontamos el componente para que pese tanto.
    });
    it('should render register and login if user.props are not given', () => {
        const headerMounted = Enzyme.mount(<StaticRouter><Header user={undefined} /></StaticRouter>)
        expect(headerMounted.find('.barguest').length).toBe(1)
        expect(headerMounted.find('.baruser').length).toBe(0)
        headerMounted.unmount();
    })
})