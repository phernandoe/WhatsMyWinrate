import { SummonerProvider } from './SummonerContext';

export default function Page({children}){
  return(
  <SummonerProvider value={{
    dogs: 'One',
    cats: 'None'
  }}>
    <div className="landing">
      {children}
    </div>
  </SummonerProvider>
  );
}