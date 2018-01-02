import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import {jsdom} from 'jsdom';

configure({ adapter: new Adapter() });