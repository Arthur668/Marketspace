
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import mark from './assets/mark123.png';
import olho1 from './assets/olho.png';
export default function App() {
  return (
    <View style={styles.container}>
      
     
      <View style={styles.content1}>
      <Image source={mark} style={styles.marking}/>
      <Text style={styles.marktext}>marketspace</Text>
      <Text style={styles.marktext2}>Seu espaço de compra e venda</Text>
      </View>
     
      <View style={styles.content2}>
        <Text style={styles.text1}>Acesse sua conta</Text>
        <TextInput 
        style={styles.emailinput}
         placeholder='E-mail'
         />
      <TextInput 
      style={styles.inputsenha}
      placeholder='Senha'
      />
      <Image source={olho1} style={styles.olhoimg}/>
     <TouchableOpacity style={styles.btn}>
         <Text style={styles.entrartxt}> Entrar </Text>
          </TouchableOpacity>
      </View>
      <View style={styles.backfooter}>
      <Text style={styles.aindaacss}> Ainda não tem acesso? </Text>
      <TouchableOpacity style={styles.createacc}>
      <Text style={styles.crateacctxt}> Criar uma conta</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    height:600,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    backgroundColor: '#EDECEE',
    alignItems: 'center',
  },
  content1:{
    alignItems: 'center',
  },
  text1:{
    marginTop:100,
    position:'relative',
    left:70,
  },
 olhoimg:{
   position:'relative',
   left:210,
   bottom:5,
   width:25,
   height:20,
 },
  inputsenha:{
  position:'relative',
  top:30,
  width:250,
  height:50,
  backgroundColor:'#ffffff',
  borderRadius:8,
  paddingLeft:20,
  color:'#9F9DA1',
  marginTop:10,
  },
emailinput:{
  position:'relative',
  top:30,
  width:250,
  height:50,
  backgroundColor:'#ffffff',
  borderRadius:8,
  paddingLeft:20,
  color:'#9F9DA1'
},
  marking:{
    width:120,
    height:80,
    marginTop:50,
  },
  marktext:{
    fontWeight:"bolder",
    fontSize:36,

  },
  marktext2:{
    fontSize:15.5,
    color:'#9F9DA1'
  },
  btn:{
  position:'relative',
  top:30,
  width:250,
  height:50,
  backgroundColor:'#6879C1',
  borderRadius:8,
  paddingLeft:20,
  },
  entrartxt:{
    position:'relative',
    left:78,
    top:15,
    fontWeight:'bolder',
    color:'white',
    fontSize:16
  },
  backfooter:{
    
    
    width:200,
    height:200,
  },
  aindaacss:{
    color:'#3D3A40',
    position:'relative',
    top:180,
    left:25,
  },
  createacc:{
    position:'relative',
    right:25,
    top:200,
    backgroundColor:'#D9D8DA',
    width:250,
    height:50,
    borderRadius:8,

  },
  crateacctxt:{
    position:'relative',
    left:70,
    top:15,
    borderRadius:8,
    color:'#3D3A40',
    fontWeight:'bolder',
  }
});
