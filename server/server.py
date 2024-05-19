from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
  return 'foobar'

app.run(port=5000)