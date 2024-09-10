#trabalhando com dicionario
#'chave': valor
pessoas={'nome':'carlos',
         'idade':25,
         'telefone':88888,
         'email':'carlos@pe.senac.br',
         'profissao':'programador'
        }
#print(pessoas['telefone'])
#print(f'0{pessoas['nome']} tem{pessoas['idade']} anos.')
#print(pessoas.values())
#print(pessoas.items())

#for recebe in pessoas.values():
    #print(recebe)
'''
dicionario={}
for x in range(2):
    nome=input('nome: ')
    numero=int(input('numero: '))
    dicionario={nome,numero}
    print(dicionario)
    '''
'''
dicio=list()
lista=list()
for recebe in range(5):
    dicio['nome']=str(input'('nome': '))
    dicio['idade']=(input('idade: '))
    lista.append(dicio.copy())
    print(lista)
    '''
'''
dicionario={}
for x in range(2):
    nome=input('nome: ')
    numero=int(input('numero: '))
    dicionario={nome, numero}
    print(dicionario)
    '''
dicionario={}
for recebe in range(2):
    nome=input('Nome: ')
    telefone=int(input('Telefone: '))
    dicionario[nome]=telefone
    print('Dicionario Atual: ', dicionario)
    nome=input('Seu Nome: ')
if nome in dicionario:
    print('Ja existe essa pessoa', nome)
else:
    dicionario[nome]=telefone
    print(dicionario)
    