from Flask import Flask
app = Flask(__rep_server__)

@app.route('/')
def hello():
  return 'hello, world'
