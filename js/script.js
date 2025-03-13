const ctx1 = document.getElementById('chart1').getContext('2d');
new Chart(ctx1, { type: 'bar', data: { labels: ['A', 'B', 'C'], datasets: [{ data: [10, 20, 30], backgroundColor: ['red', 'blue', 'green'] }] } });

const ctx2 = document.getElementById('chart2').getContext('2d');
new Chart(ctx2, { type: 'line', data: { labels: ['A', 'B', 'C'], datasets: [{ data: [10, 15, 25], borderColor: 'blue', fill: false }] } });

const ctx3 = document.getElementById('chart3').getContext('2d');
new Chart(ctx3, { type: 'pie', data: { labels: ['X', 'Y', 'Z'], datasets: [{ data: [30, 40, 30], backgroundColor: ['yellow', 'purple', 'cyan'] }] } });

const ctx4 = document.getElementById('chart4').getContext('2d');
new Chart(ctx4, { type: 'doughnut', data: { labels: ['One', 'Two', 'Three'], datasets: [{ data: [20, 50, 30], backgroundColor: ['orange', 'pink', 'grey'] }] } });





let graphiqueAffiche = false;
    let myChartInstance = null;
        document.getElementById('afficherGraphique').addEventListener('click', function() {
            if (graphiqueAffiche) {
                document.getElementById('graphiqueContainer').style.display = 'none';
                graphiqueAffiche = false;
                if (myChartInstance) {
                    myChartInstance.destroy();
                    myChartInstance = null;
                }
            } else {
                document.getElementById('graphiqueContainer').style.display = 'block';
                graphiqueAffiche = true;
                const ctx = document.getElementById('myChart').getContext('2d');
                myChartInstance = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai'],
                        datasets: [{
                            label: 'Ventes',
                            data: [12, 19, 3, 5, 2],
                            backgroundColor: document.getElementById('couleurGraphique').value
                        }]
                    }
                });
            }
        });

        document.getElementById('couleurGraphique').addEventListener('input', function() {
            if (myChartInstance) {
                myChartInstance.data.datasets[0].backgroundColor = this.value;
                myChartInstance.update();
            }
        });



