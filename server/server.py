from Flask import Flask
app = Flask(__rep_server__)

@app.route('/')
def hello():
  return 'hello, world'

if __rep_server__ == '__main__':
  app.run(port=5000)